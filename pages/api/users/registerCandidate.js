import nc from 'next-connect';
import bcrypt from 'bcryptjs';
import User from '../../../models/User';
import db from '../../../utils/db';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req, res) => {
  await db.connect();
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
  });
  console.log("before saving user");
  //const user = await newUser.save();
  //await db.disconnect();
  //console.log(user);

  try {
    const user = await newUser.save();
    await db.disconnect();
    console.log("After saving user");
    console.log(user);
    const token = signToken(user);
    console.log("After sign token");
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }
  catch (err) {
    console.log("before error");
    console.log(err.message);
    //enqueueSnackbar(err.message, { variant: 'error' });

    res.status(500).send({ error: err.message });

    console.log(err.message);


  }

});

export default handler;
