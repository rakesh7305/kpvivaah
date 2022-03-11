import React, { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import {
  Grid,
  Link,
  // List,
  // ListItem,
  Typography,
  // Card,
  // Button,
  TextField,
  // CircularProgress,
  Box,
} from '@material-ui/core';
// import Rating from '@material-ui/lab/Rating';
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
//import Product from '../../models/Product';
import db from '../../utils/db';
// import axios from 'axios';
import { Store } from '../../utils/Store';
// import { getError } from '../../utils/error';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import Candidate from '../../models/Candidate';
import moment from 'moment';


export default function CandidateScreen(props) {
  // const router = useRouter();
  // const { state, dispatch } = useContext(Store);
  // const { userInfo } = state;
  const { candidate } = props;
  const classes = useStyles();
  // const { enqueueSnackbar } = useSnackbar();

  // const [reviews, setReviews] = useState([]);
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState('');
  // const [loading, setLoading] = useState(false);

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     await axios.post(
  //       `/api/products/${product._id}/reviews`,
  //       {
  //         rating,
  //         comment,
  //       },
  //       {
  //         headers: { authorization: `Bearer ${userInfo.token}` },
  //       }
  //     );
  //     setLoading(false);
  //     enqueueSnackbar('Review submitted successfully', { variant: 'success' });
  //     fetchReviews();
  //   } catch (err) {
  //     setLoading(false);
  //     enqueueSnackbar(getError(err), { variant: 'error' });
  //   }
  // };

  // const fetchReviews = async () => {
  //   try {
  //     const { data } = await axios.get(`/api/products/${product._id}/reviews`);
  //     setReviews(data);
  //   } catch (err) {
  //     enqueueSnackbar(getError(err), { variant: 'error' });
  //   }
  // };
  useEffect(() => {
    //    fetchReviews();
  }, []);

  if (!candidate) {
    return <div>Candidate Not Found</div>;
  }
  // const addToCartHandler = async () => {
  //   const existItem = state.cart.cartItems.find((x) => x._id === product._id);
  //   const quantity = existItem ? existItem.quantity + 1 : 1;
  //   const { data } = await axios.get(`/api/products/${product._id}`);
  //   if (data.countInStock < quantity) {
  //     window.alert('Sorry. Product is out of stock');
  //     return;
  //   }
  //   dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  //   router.push('/cart');
  // };

  return (
    <Layout title={candidate.name} description={candidate.description}>
      <div className={classes.section}>
        <NextLink href="/search" passHref>
          <Link>
            <Typography>back to search</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={candidate.image}
            alt={candidate.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            component="form"
            sx={{
              //'& .MuiTextField-root': { m: 2, width: '25ch' },
              p: 2, border: '1px solid grey',
              borderRadius: 10,
            }}
            noValidate
            autoComplete="off"
            bgcolor="lightblue"
          >
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <TextField
                  id="outlined-read-only-input"
                  label="Name"
                  defaultValue={candidate.name}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />        </Grid>
              <Grid item xs={2}>
                <TextField
                  id="outlined-read-only-input"
                  label="Age"
                  defaultValue={candidate.age}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />        </Grid>
              <Grid item xs={5}>
                <TextField
                  id="outlined-read-only-input"
                  label="Birth Date"
                  defaultValue={candidate.birthDate}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={5}>
                <TextField
                  id="outlined-read-only-input"
                  label="Registration No"
                  defaultValue={candidate.registrationNo}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={7}>
                <TextField
                  id="outlined-read-only-input"
                  label="Registration Date"
                  defaultValue={candidate.registrationDate}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={5}>
                <TextField
                  id="outlined-read-only-input"
                  label="Samaj Name"
                  defaultValue={candidate.samajName}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="NRI"
                  defaultValue={candidate.NRI}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Gender"
                  defaultValue={candidate.gender}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Name"
                  defaultValue={candidate.name}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Middle Name"
                  defaultValue={candidate.middleName}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Last Name"
                  defaultValue={candidate.lastName}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Current Address"
                  defaultValue={candidate.currentAddress}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Permenant Address"
                  defaultValue={candidate.permenantAddress}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Parents Mobile"
                  defaultValue={candidate.parentsMobile}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Email"
                  defaultValue={candidate.email}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Native"
                  defaultValue={candidate.native}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Birth Date"
                  defaultValue={candidate.birthDate}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Birth Time"
                  defaultValue={candidate.birthTime}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Birth Place"
                  defaultValue={candidate.birthPlace}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>


            </Grid>
          </Box>
        </Grid>
        <Grid item md={12} xs={12}>
          <Box
            component="form"
            sx={{
              //'& .MuiTextField-root': { m: 2, width: '25ch' },
              p: 2, border: '1px solid grey',
              borderRadius: 10,
            }}
            noValidate
            autoComplete="off"
            bgcolor="lightpink"
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Sub Caste"
                  defaultValue={candidate.subCaste}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Mosal"
                  defaultValue={candidate.mosal}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Height"
                  defaultValue={candidate.height}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Weight"
                  defaultValue={candidate.weight}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Eye Sight"
                  defaultValue={candidate.eyeSight}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Horoscope Belief"
                  defaultValue={candidate.horoscopeBelief}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Sani Mangal"
                  defaultValue={candidate.saniMangal}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Complexion"
                  defaultValue={candidate.complexion}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Disability"
                  defaultValue={candidate.disability}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Hobby"
                  defaultValue={candidate.hobby}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Marital Status"
                  defaultValue={candidate.maritalStatus}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Marriage Date"
                  defaultValue={candidate.marriageDate}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Divorce Date"
                  defaultValue={candidate.divorceDate}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Child Responsibility"
                  defaultValue={candidate.childResponsibility}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Education"
                  defaultValue={candidate.education}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Occupation"
                  defaultValue={candidate.occupation}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Title"
                  defaultValue={candidate.title}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Work Address"
                  defaultValue={candidate.workAddress}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Other Qualities"
                  defaultValue={candidate.otherQualities}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Monthly Income"
                  defaultValue={candidate.monthlyIncome}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Currency"
                  defaultValue={candidate.currency}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Own House"
                  defaultValue={candidate.ownHouse}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Preference"
                  defaultValue={candidate.preference}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>




            </Grid>
          </Box>
        </Grid>
        <Grid item md={12} xs={12}>
          <Box
            component="form"
            sx={{
              //'& .MuiTextField-root': { m: 2, width: '25ch' },
              p: 2, border: '1px solid grey',
              borderRadius: 10,
            }}
            noValidate
            autoComplete="off"
            bgcolor="lightyellow"
          >
            <Grid container spacing={2}>

              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Father Name"
                  defaultValue={candidate.fatherName}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Father Education"
                  defaultValue={candidate.fatherEducation}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Father Occupation"
                  defaultValue={candidate.fatherOccupation}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Father Mobile"
                  defaultValue={candidate.fatherMobile}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Mother Name"
                  defaultValue={candidate.motherName}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Mother Education"
                  defaultValue={candidate.motherEducation}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Mother Occupation"
                  defaultValue={candidate.motherOccupation}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Mother Mobile"
                  defaultValue={candidate.motherMobile}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Family Income"
                  defaultValue={candidate.familyIncome}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Grandfather Name"
                  defaultValue={candidate.grandfatherName}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Brothers"
                  defaultValue={candidate.brothers}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Brothers Marital Status"
                  defaultValue={candidate.brothersMaritalStatus}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Sisters"
                  defaultValue={candidate.sisters}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Sisters Marital Status"
                  defaultValue={candidate.sistersMaritalStatus}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Why Me"
                  defaultValue={candidate.whyMe}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Reference"
                  defaultValue={candidate.reference}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Ref Name"
                  defaultValue={candidate.refName}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Ref Village"
                  defaultValue={candidate.refVillage}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Ref Mobile"
                  defaultValue={candidate.refMobile}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-read-only-input"
                  label="Image"
                  defaultValue={candidate.image}
                  InputProps={{
                    readOnly: true
                  }}
                  variant="outlined"
                  fullWidth
                />           </Grid>



            </Grid>
          </Box>
        </Grid>
      </Grid>

    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { _id } = params;

  await db.connect();
  const candidate1 = await Candidate.findOne({ _id }).lean();
  await db.disconnect();
  candidate1.age = moment().diff(candidate1.birthDate, 'years'); // Output: 20

  console.log("Age: " + candidate1.age);
  candidate1.birthDate = moment(candidate1.birthDate).format('DD-MMM-YYYY');


  const candidate = JSON.parse(JSON.stringify(candidate1));
  return {
    props: {
      //candidate: db.convertDocToObjJSON(candidate),
      //candidate: JSON.parse(JSON.stringify(candidate)),
      candidate,

    },
  };
}
