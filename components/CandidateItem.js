import {
  // Button,
  Card,
  CardActionArea,
  // CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';
// import Rating from '@material-ui/lab/Rating';
import useStyles from '../utils/styles';

//export default function CandidateItem({ candidate, addToCartHandler }) {

export default function CandidateItem({ candidate }) {
  const classes = useStyles();

  return (
    <Card>
      <NextLink href={`/candidate/${candidate._id}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            image={candidate.image}
            title={candidate.name}
            className={classes.photo}
          ></CardMedia>
          <CardContent>
            <Typography>{candidate.name}</Typography>
            <Typography>{candidate.age}</Typography>
            <Typography>{candidate.birthDate}</Typography>
            <Typography>{candidate.education}</Typography>

          </CardContent>
        </CardActionArea>
      </NextLink>
      {/* <CardActions>
        <Typography>{candidate.education}</Typography>
        <Button
          size="small"
          color="primary"
          onClick={() => addToCartHandler(candidate)}
        >
          Add to cart
        </Button>
      </CardActions> */}
    </Card>
  );
}
