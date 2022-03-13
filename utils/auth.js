import jwt from 'jsonwebtoken';

const signToken = (user) => {
  console.log("in signToken");

  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '10s',
    }
  );
};
const isAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    // Bearer xxx => xxx
    const token = authorization.slice(7, authorization.length);
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({ message: 'Token is not valid' });
      } else {
        req.user = decode;
        next();
      }
    });
  } else {
    res.status(401).send({ message: 'Token is not suppiled' });
  }
};
const isAdmin = async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'User is not admin' });
  }
};
const isAuthUser = async (req, res) => {
  const cookie = req.headers.cookie;
  console.log(req.headers.cookie);
  const userInfo = cookie.slice(cookie.search("userInfo=")+9).replace("%22"," ");
  console.log("userInfo:" + userInfo);
  if (userInfo.search("token") === -1 ) {
    return {
      auth: false,
    }
  }
};

export { signToken, isAuth, isAdmin, isAuthUser };
