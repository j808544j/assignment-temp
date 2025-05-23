const express = require('express');
const router = express.Router();
const { getTrendingProducts, getBestSellingProducts } = require('../controllers/productController');

router.get('/trending-products', getTrendingProducts);
router.get('/best-selling-products', getBestSellingProducts);

module.exports = router; 