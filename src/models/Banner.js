const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    link: String,
    active: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('banners', bannerSchema); 