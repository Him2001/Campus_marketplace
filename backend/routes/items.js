// routes/items.js
module.exports = (io) => {
    const express = require('express');
    const router = express.Router();
    const Item = require('../models/Item');
  
    // @route   POST api/items
    // @desc    Create an item
    // @access  Private
    router.post('/', async (req, res) => {
      const { title, description, price, imageUrl } = req.body;
  
      try {
        const newItem = new Item({
          title,
          description,
          price,
          imageUrl,
          sellerId: req.user.id // Assuming you have middleware to extract user ID from JWT
        });
  
        const item = await newItem.save();
        io.emit('itemAdded', item); // Emit event for real-time update
  
        res.json(item);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    });
  
    return router;
  };