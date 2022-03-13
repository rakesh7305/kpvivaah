import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  MenuItem,
  Select,
  Typography,
} from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { useRouter } from 'next/router';
import React, { useEffect, useContext } from 'react';
import Layout from '../components/Layout';
import db from '../utils/db';
// import Product from '../models/Product';
import Candidate from '../models/Candidate';
import useStyles from '../utils/styles';
//import ProductItem from '../components/ProductItem';
import CandidateItem from '../components/CandidateItem';
import { Store } from '../utils/Store';
// import axios from 'axios';
// import Rating from '@material-ui/lab/Rating';
import { Pagination } from '@material-ui/lab';
// import { useEffect } from 'react';
import moment from 'moment';
import { useSnackbar } from 'notistack';
import { isAuth, isAuthUser } from '../utils/auth'




const PAGE_SIZE = 3;

// const prices = [
//   {
//     name: '$1 to $50',
//     value: '1-50',
//   },
//   {
//     name: '$51 to $200',
//     value: '51-200',
//   },
//   {
//     name: '$201 to $1000',
//     value: '201-1000',
//   },
// ];
const genders = [
  {
    value: 'M',
    label: 'Groom (Var)',
  },
  {
    value: 'F',
    label: 'Bride (Kanya)',
  },
];
const ageGroup = [
  {
    name: '18 to 20',
    value: '18-20',
  },
  {
    name: '20 to 23',
    value: '20-23',
  },
  {
    name: '23 to 26',
    value: '23-26',
  },
  {
    name: '26 to 29',
    value: '26-29',
  },
  {
    name: '29 to 32',
    value: '29-32',
  },
  {
    name: '32 to 35',
    value: '32-35',
  },
  {
    name: '35 to 38',
    value: '35-38',
  },
  {
    name: '38 and above',
    value: '38-80',
  },
];

// const ratings = [1, 2, 3, 4, 5];

export default function Search(props) {
  const classes = useStyles();
  const router = useRouter();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { state, dispatch } = useContext(Store);
  const {
    userInfo,
  } = state;
  // useEffect(() => {
  //   if (!userInfo) {
  //     router.push('/login?redirect=/search');
  //     console.log("============");
  //     console.log("Please login");
  //     console.log("============");
  //     enqueueSnackbar("Please Login", { variant: 'error' });
  //     return <div>Please Login</div>;
  //   }
  // }, []);

  // if (!userInfo) {
  //   router.push('/login?redirect=/search');
  //   enqueueSnackbar("Outside Please Login", { variant: 'error' });

  //   console.log("============");
  //   console.log("Outside Please login");
  //   console.log("============");
  // }


  const {
    //genderQuery = 'all',
    gender = 'all',
    //ageQuery = 'all',
    age = 'all',
    nriFlag = 'all',
    education = 'all',
    address = 'all',
    height = 'all',
    price = 'all',
    rating = 'all',
    sort = 'featured',
  } = router.query;
  const { candidates, countCandidates, page, pages, nriFlags, educationList, addressList, heightList } = props;
  console.log("In Search 1 = " + page);

  //console.log(router.query);

  //console.log(props);

  const filterSearch = ({
    page,
    nriFlag,
    education,
    address,
    height,
    sort,
    min,
    max,
    searchQuery,
    price,
    rating,
    gender,
    age,
  }) => {
    const path = router.pathname;
    const { query } = router;
    if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (gender) query.gender = gender;
    if (age) query.age = age;
    if (nriFlag === true) { query.nriFlag = true }
    else if (nriFlag === false) { query.nriFlag = false }
    else if (nriFlag === 'all') { query.nriFlag = 'all' }
    if (education) query.education = education;
    if (address) query.address = address;
    if (height) query.height = height;
    if (price) query.price = price;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: path,
      query: query,
    });
  };
  // const refreshData = () => {
  //   router.replace(router.asPath);
  // }
  // useEffect(() => {
  //   console.log("refresing...")
  //   refreshData()
  // }, []);
  const genderHandler = (e) => {
    filterSearch({ gender: e.target.value });
  };
  const ageHandler = (e) => {
    filterSearch({ age: e.target.value });
  };
  const nriFlagHandler = (e) => {
    filterSearch({ nriFlag: e.target.value });
  };
  const pageHandler = (e, page) => {
    filterSearch({ page });
  };
  const educationHandler = (e) => {
    filterSearch({ education: e.target.value });
  };
  const addressHandler = (e) => {
    filterSearch({ address: e.target.value });
  };
  const heightHandler = (e) => {
    filterSearch({ height: e.target.value });
  };
  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };
  // const priceHandler = (e) => {
  //   filterSearch({ price: e.target.value });
  // };
  // const ratingHandler = (e) => {
  //   filterSearch({ rating: e.target.value });
  // };

  //const { state, dispatch } = useContext(Store);
  // const addToCartHandler = async (product) => {
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
    <Layout title="Search">
      {/* <div>{!userInfo? "Please Login":""}</div> */}
      <Grid className={classes.mt1} container spacing={1}>
        <Grid item xs={3}>
          <List>
            <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>Gender</Typography>
                <Select fullWidth value={gender} onChange={genderHandler}>
                  <MenuItem value="all">All</MenuItem>
                  {genders &&
                    genders.map((gender) => (
                      <MenuItem key={gender.value} value={gender.value}>
                        {gender.label}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </ListItem>
            <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>Age</Typography>
                <Select fullWidth value={age} onChange={ageHandler}>
                  <MenuItem value="all">All</MenuItem>
                  {ageGroup &&
                    ageGroup.map((age) => (
                      <MenuItem key={age.value} value={age.value}>
                        {age.value}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </ListItem>
            <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>NRI</Typography>
                <Select fullWidth value={nriFlag} onChange={nriFlagHandler}>
                  <MenuItem value="all">All</MenuItem>
                  {nriFlags &&
                    nriFlags.map((nriFlag) => (
                      <MenuItem key={nriFlag} value={nriFlag}>
                        {nriFlag === true ? 'Yes' : 'No'}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </ListItem>
            <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>Education</Typography>
                <Select value={education} onChange={educationHandler} fullWidth>
                  <MenuItem value="all">All</MenuItem>
                  {education &&
                    educationList.map((education) => (
                      <MenuItem key={education} value={education}>
                        {education}
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </ListItem>
            <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>City</Typography>
                <Select value={address} onChange={addressHandler} fullWidth>
                  <MenuItem value="all">All</MenuItem>
                  {addressList.map((address) => (
                    <MenuItem key={address} value={address}>
                      {address}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </ListItem>
            <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>Height</Typography>
                <Select value={height} onChange={heightHandler} fullWidth>
                  <MenuItem value="all">All</MenuItem>
                  {heightList.map((height) => (
                    <MenuItem key={height} value={height}>
                      {height}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </ListItem>
            {/* <ListItem>
              <Box className={classes.fullWidth}>
                <Typography>Ratings</Typography>
                <Select value={rating} onChange={ratingHandler} fullWidth>
                  <MenuItem value="all">All</MenuItem>
                  {ratings.map((rating) => (
                    <MenuItem dispaly="flex" key={rating} value={rating}>
                      <Rating value={rating} readOnly />
                      <Typography component="span">&amp; Up</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </ListItem> */}
          </List>
        </Grid>
        <Grid item xs={9}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              {candidates.length === 0 ? 'No' : countCandidates} Results
              {gender !== 'all' && gender !== '' && ' : Gender= ' + gender}
              {age !== 'all' && age !== '' && ' : Age=' + age}
              {nriFlag !== 'all' && ' : NRI=' + nriFlag}
              {education !== 'all' && ' : Education=' + education}
              {address !== 'all' && ' : City=' + address}
              {height !== 'all' && ' : Height=' + height}
              {price !== 'all' && ' : Price ' + price}
              {rating !== 'all' && ' : Rating ' + rating + ' & up'}
              {(gender !== 'all' && gender !== '') ||
                age !== 'all' ||
                nriFlag !== 'all' ||
                education !== 'all' ||
                address !== 'all' ||
                height !== 'all' ||
                rating !== 'all' ||
                price !== 'all' ? (
                <Button onClick={() => router.push('/search')}>
                  <CancelIcon />
                </Button>
              ) : null}
            </Grid>
            <Grid item>
              <Typography component="span" className={classes.sort}>
                Sort by
              </Typography>
              <Select value={sort} onChange={sortHandler}>
                <MenuItem value="name">Name</MenuItem>
                <MenuItem value="birthDate">Birth Date</MenuItem>
                {/* <MenuItem value="highest">Price: High to Low</MenuItem> */}
                {/* <MenuItem value="toprated">Customer Reviews</MenuItem> */}
                <MenuItem value="newest">Recently Added</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid className={classes.mt1} container spacing={3}>
            {candidates.map((candidate) => (
              <Grid item md={4} key={candidate._id}>
                <CandidateItem
                  candidate={candidate}
                //addToCartHandler={addToCartHandler}
                />
              </Grid>
            ))}
          </Grid>
          <Pagination
            className={classes.mt1}
            defaultPage={parseInt(gender.page || '1')}
            count={pages}
            onChange={pageHandler}
          ></Pagination>
        </Grid>
      </Grid>
    </Layout>
  );
}
//export async function getServerSideProps({ query }) {
export async function getServerSideProps(context) {
  const { query } = context;

  try {
    console.log("before isAuthUser")
    const data = await isAuthUser(context.req, context.res);
    console.log("after isAuthUser" + data)
    if (data.auth === false) {
      return {
        redirect: {
          destination: '/login?redirect=/search',
          permanent: false,
        },
      }
    }
  } catch (e) {

  }

  console.log("in get Server Side props")
  console.log(query);



  await db.connect();
  const pageSize = query.pageSize || PAGE_SIZE;
  const page = query.page || 1;
  const nriFlag = query.nriFlag || '';
  const education = query.education || '';
  const address = query.address || '';
  const height = query.height || '';

  // const brand = query.brand || '';
  // const price = query.price || '';
  // const rating = query.rating || '';
  const sort = query.sort || '';
  const genderQuery = query.gender || '';
  const ageQuery = query.age || '';


  console.log("in get Server Side props 2")
  console.log(query.gender);
  console.log(query.age);
  console.log(query.education);
  console.log(query.address);
  console.log(query.height);



  const genderFilter =
    genderQuery && genderQuery !== 'all'
      ? {
        gender: {
          $regex: genderQuery,
          $options: 'i',
        },
      }
      : {};


  //const date1 = moment(new Date()).subtract(Number(ageQuery.split('-')[1]), 'years').toDate();
  //const date2 = moment(new Date()).subtract(Number(ageQuery.split('-')[0]), 'years').toDate();


  //console.log(date1 + " and " + date2);
  //console.log(moment(new Date()).subtract(28, 'years'));

  const ageFilter =
    ageQuery && ageQuery !== 'all'
      ? {
        birthDate: {
          $gte: moment(new Date()).subtract(Number(ageQuery.split('-')[1]), 'years').toDate(),
          $lte: moment(new Date()).subtract(Number(ageQuery.split('-')[0]), 'years').toDate()
          //{ birthDate: { $lt: new ISODate('1998-02-02')}}
          //$gt: new Date('1998-02-02')
        },
      }
      : {};

  console.log('nriFlag = ' + nriFlag);

  const nriFilter = (nriFlag === 'true' || nriFlag === 'false') ? { 'NRI': nriFlag } : {};
  const educationFilter = education && education !== 'all' ? { education } : {};
  const addressFilter = address && address !== 'all' ? { 'currentAddress': address } : {};
  const heightFilter = height && height !== 'all' ? { height } : {};

  //const nriFilter = nriFlag && nriFlag !== 'all' ? { nriFlag } : {};
  // if (nriFlag === true) { query.nriFlag = true}
  //   else if(nriFlag === false) {query.nriFlag = false}
  //   else if (nriFlag === 'all') {query.nriFlag = 'all'};

  console.log(nriFilter);
  console.log(educationFilter);
  console.log(addressFilter);
  console.log(heightFilter);


  // const yearFilter =
  // yearQuery && yearQuery !== 'all'
  //   ? {
  //     Year: {
  //       $regex: yearQuery,
  //       $options: 'i',
  //     },
  //   }
  //   : {};
  // const yearFilter = category && category !== 'all' ? { category } : {};
  // const brandFilter = brand && brand !== 'all' ? { brand } : {};
  // const ratingFilter =
  //   rating && rating !== 'all'
  //     ? {
  //       rating: {
  //         $gte: Number(rating),
  //       },
  //     }
  //     : {};
  // const priceFilter =
  //   price && price !== 'all'
  //     ? {
  //       price: {
  //         $gte: Number(price.split('-')[0]),
  //         $lte: Number(price.split('-')[1]),
  //       },
  //     }
  //     : {};

  // const order =
  //   sort === 'featured'
  //     ? { featured: -1 }
  //     : sort === 'lowest'
  //       ? { price: 1 }
  //       : sort === 'highest'
  //         ? { price: -1 }
  //         : sort === 'toprated'
  //           ? { rating: -1 }
  //           : sort === 'newest'
  //             ? { createdAt: -1 }
  //             : { _id: -1 };

  const order =
    sort === 'name'
      ? { name: 1 }
      : sort === 'lowest'
        ? { birthDate: 1 }
        // : sort === 'highest'
        //   ? { price: -1 }
        //   : sort === 'toprated'
        //     ? { rating: -1 }
        : sort === 'newest'
          ? { createdAt: -1 }
          : { _id: -1 };

  console.log('Sort:' + order);

  // const categories = await Product.find().distinct('category');
  // const brands = await Product.find().distinct('brand');
  // const productDocs = await Product.find(
  //   {
  //     ...queryFilter,
  //     ...categoryFilter,
  //     ...priceFilter,
  //     ...brandFilter,
  //     ...ratingFilter,
  //   },
  //   '-reviews'
  // )
  //   .sort(order)
  //   .skip(pageSize * (page - 1))
  //   .limit(pageSize)
  //   .lean();

  // const countProducts = await Product.countDocuments({
  //   ...queryFilter,
  //   ...categoryFilter,
  //   ...priceFilter,
  //   ...brandFilter,
  //   ...ratingFilter,
  // });

  const candidateDocs = await Candidate.find(
    {
      ...genderFilter,
      ...ageFilter,
      ...nriFilter,
      ...educationFilter,
      ...addressFilter,
      ...heightFilter,

    },
    // '-reviews'
  )
    .sort(order)
    .skip(pageSize * (page - 1))
    .limit(pageSize)
    .lean();

  //console.log(candidateDocs);

  const nriFlags = await Candidate.find().distinct('NRI');
  const educationList = await Candidate.find().distinct('education');
  const addressList = await Candidate.find().distinct('currentAddress');
  const heightList = await Candidate.find().distinct('height');


  // console.log('Education List: ' + educationList);
  // console.log('Education List: ' + addressList);
  // console.log('Education List: ' + heightList);

  //may not need to make this query again
  const countCandidates = await Candidate.countDocuments({
    ...genderFilter,
    ...ageFilter,
    ...nriFilter,
    ...educationFilter,
    ...addressFilter,
    ...heightFilter,
  });
  console.log("in get Server Side props 3");
  //console.log(candidateDocs);
  console.log("in get Server Side props 3");

  await db.disconnect();

  // const products = productDocs.map(db.convertDocToObj);
  //const candidates = candidateDocs.map(db.convertDocToObj);
  //const candidates = JSON.parse(JSON.stringify(candidateDocs));
  //const candidates = candidateDocs.map(db.convertDocToObjJSON);
  const candidates = JSON.parse(JSON.stringify(candidateDocs.map(db.convertDocToObjJSON)));
  //const countCandidates = candidates.length;
  console.log("in get Server Side props 4");
  //console.log(JSON.stringify(candidates));

  console.log("in get Server Side props 5");

  return {
    props: {
      candidates,
      countCandidates,
      page,
      pages: Math.ceil(countCandidates / pageSize),
      nriFlags,
      educationList,
      addressList,
      heightList,
    },
  };
}
