const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    image: String,
    rating: Number,
    reviews: Number,
    category: String,
    unitsSold: Number
}, {
    timestamps: true
});

module.exports = {
    TrendingProduct: mongoose.model('trendingProducts', productSchema),
    BestSellingProduct: mongoose.model('bestSellingProducts', productSchema)
}; 