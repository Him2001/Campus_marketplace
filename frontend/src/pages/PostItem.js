import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const PostItem = ({ addNewItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [owner, setOwner] = useState('');
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || !owner || !location || !details || !image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    const newItem = { 
      name, 
      price,
      owner,
      location,
      details,
      imageUrl: URL.createObjectURL(image)
    };

    addNewItem(newItem);

    // Clear form
    setName('');
    setPrice('');
    setOwner('');
    setLocation('');
    setDetails('');
    setImage(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Post a New Item</Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Name" value={name} onChange={(e) => setName(e.target.value)} margin="normal" required />
        <TextField fullWidth label="Price" value={price} onChange={(e) => setPrice(e.target.value)} margin="normal" required />
        <TextField fullWidth label="Owner" value={owner} onChange={(e) => setOwner(e.target.value)} margin="normal" required />
        <TextField fullWidth label="Location" value={location} onChange={(e) => setLocation(e.target.value)} margin="normal" required />
        <TextField fullWidth label="Details" value={details} onChange={(e) => setDetails(e.target.value)} margin="normal" required />
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} required />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
      </form>
    </Container>
  );
};

export default PostItem;