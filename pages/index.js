/* eslint-disable @next/next/no-img-element */
// import NextLink from 'next/link';
import 
{ Grid, 
  // Link, 
  // List, 
  // ListItem, 
  // Paper, 
  Box, 
  // Card, 
  // CardContent, 
  // Typography, 
  Button 
} from '@material-ui/core';
import Layout from '../components/Layout';
import db from '../utils/db';
import Product from '../models/Product';
// import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';
// import ProductItem from '../components/ProductItem';
import Carousel from 'react-material-ui-carousel';
import useStyles from '../utils/styles';

export default function Home(props) {
  const classes = useStyles();
  const router = useRouter();
  // const { state, dispatch } = useContext(Store);
  // const { topRatedProducts, featuredProducts } = props;
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
  console.log("before printing props");
  console.log(props);
  console.log("after printing props");
  const submitHandler = (e) => {
    e.preventDefault();
    //router.push(`/search?query=${query}`);
    router.push(`/search`);

  };
  return (
    <Layout>
      <Carousel className={classes.mt1} animation="slide">
        {/* <NextLink
            key="1"
            href="/"
            passHref
          >
            <Link>
              <img
                src="/images/hindu-wedding.jpg"
                alt="image1"
                className={classes.featuredImage}
              ></img>
            </Link>
          </NextLink>
          <NextLink
            key="2"
            href="/"
            passHref
          >
            <Link>
              <img
                src="/images/wedding1-1556022297.jpg"
                alt="image2"
                className={classes.featuredImage}
              ></img>
            </Link>
          </NextLink> */}
        <Box
          display="flex"
          // width="100%" height={80} 

          bgcolor="lightblue"
          alignItems="center"
          justifyContent="center"
          key="1"
        >
          <img src="/images/wedding1-1556022297.jpg" height={400} width={600}></img>
        </Box>
        <Box
          display="flex"
          // width="100%" height={80}
          bgcolor="lightblue"
          alignItems="center"
          justifyContent="center"
          key="2"
        >
          <img src="/images/hindu-wedding.jpg" height={400} width={600}></img>
        </Box>
        {/* <Card variant="oulined" key="1" >

          <img src="/images/hindu-wedding.jpg"></img>
        </Card>
        <Card variant="oulined" key="2">

          TEST2
          <img src="/images/wedding1-1556022297.jpg"></img>
        </Card> */}
      </Carousel>
      {/* <Typography variant="h2">Popular Products</Typography>
      <Grid container spacing={3}>
        {topRatedProducts.map((product) => (
          <Grid item md={4} key={product.name}>
            <ProductItem
              product={product}
              addToCartHandler={addToCartHandler}
            />
          </Grid>
        ))}
      </Grid> */}
      {/* <Box justifyContent="center"
     sx={{p: 2, border: '1px solid grey',}}
> */}
      <Grid container justify="center" spacing={20}>
        <Grid item marginTop= {10}>
          <form onSubmit={submitHandler} className={classes.searchForm}>
            <Button
              type="submit"
              aria-label="search"
              label="Click to Search"
              variant="contained"
              color="primary"

            >
              Click To Search
            </Button>
          </form>
        </Grid>
      </Grid>
      {/* </Box> */}

    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const featuredProductsDocs = await Product.find(
    { isFeatured: true },
    '-reviews'
  )
    .lean()
    .limit(3);
  const topRatedProductsDocs = await Product.find({}, '-reviews')
    .lean()
    .sort({
      rating: -1,
    })
    .limit(6);
  await db.disconnect();
  return {
    props: {
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
      topRatedProducts: topRatedProductsDocs.map(db.convertDocToObj),
    },
  };
}
