const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  datePosted: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);