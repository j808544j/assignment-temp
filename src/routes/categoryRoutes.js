const express = require('express');
const router = express.Router();
const { getFeaturedCategories } = require('../controllers/categoryController');

router.get('/featured-categories', getFeaturedCategories);

module.exports = router; 