const Category = require('../models/Category');

exports.getFeaturedCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json({ categories });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 