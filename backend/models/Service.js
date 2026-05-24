const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a service title'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please provide a service description'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  icon: String,
  price: {
    type: Number,
    min: [0, 'Price cannot be negative']
  },
  category: {
    type: String,
    enum: ['implementation', 'training', 'support', 'development', 'migration', 'consulting'],
    default: 'implementation'
  },
  active: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', serviceSchema);