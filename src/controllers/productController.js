const { TrendingProduct, BestSellingProduct } = require('../models/Product');

exports.getTrendingProducts = async (req, res) => {
    try {
        const products = await TrendingProduct.find({});
        res.json({ products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBestSellingProducts = async (req, res) => {
    try {
        const products = await BestSellingProduct.find({});
        res.json({ products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 