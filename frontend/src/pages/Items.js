// src/pages/Items.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await axios.get('http://localhost:5000/api/items');
      setItems(res.data);
    };
    fetchItems();
  }, []);

  return (
    <Container>
      <Grid container spacing={4}>
        {items.map(item => (
          <Grid item key={item._id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography>{item.description}</Typography>
                <Typography>${item.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Items;