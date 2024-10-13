import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, CardMedia } from '@mui/material';

const ItemDetail = ({ products }) => {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>{product.name}</Typography>
      <CardMedia
        component="img"
        height="300"
        image={product.imageUrl}
        alt={product.name}
      />
      <Typography variant="h6">Price: {product.price}</Typography>
      <Typography variant="body1">Owner: {product.owner}</Typography>
      <Typography variant="body1">Phone: {product.phone}</Typography>
      <Typography variant="body1">Location: {product.location}</Typography>
      <Typography variant="body1">Details: {product.details}</Typography>
    </Container>
  );
};

export default ItemDetail;