require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const bannerRoutes = require('./routes/bannerRoutes');

const app = express();
const port = process.env.PORT || 3000;

connectDB()
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    });

app.use(cors());
app.use(express.json());

app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', bannerRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 