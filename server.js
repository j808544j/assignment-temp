const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const featuredCategories = require('./data/featuredCategories.json');
const trendingProducts = require('./data/trendingProducts.json');
const bestSellingProducts = require('./data/bestSellingProducts.json');
const banners = require('./data/banners.json');

app.get('/api/featured-categories', (req, res) => {
    res.json(featuredCategories);
});

app.get('/api/trending-products', (req, res) => {
    res.json(trendingProducts);
});

app.get('/api/best-selling-products', (req, res) => {
    res.json(bestSellingProducts);
});

app.get('/api/banners', (req, res) => {
    res.json(banners);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 