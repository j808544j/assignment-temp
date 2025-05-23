const Banner = require('../models/Banner');

exports.getBanners = async (req, res) => {
    try {
        const banners = await Banner.find({});
        res.json({ banners });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 