import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

const Shopping = ({ products, setProducts }) => {
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/product/${index}`);
  };

  const handleDelete = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Recommended for you
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card style={{ position: 'relative' }}>
              <IconButton
                size="small"
                style={{ position: 'absolute', top: 5, right: 5, zIndex: 10 }}
                onClick={() => handleDelete(index)}
              >
                <CloseIcon />
              </IconButton>
              <CardActionArea onClick={() => handleClick(index)}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.imageUrl}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: {product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Owner: {product.owner}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Location: {product.location}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Shopping;