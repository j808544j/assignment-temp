const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    image: String,
    productCount: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('featuredCategories', categorySchema); 