# B2C Marketplace Backend

A simple Express.js backend for a B2C marketplace that provides REST APIs for featured categories, trending products, best-selling products, and banners.

## Features

- RESTful API endpoints for marketplace data
- CORS enabled for cross-origin requests
- Dummy data included for testing
- Simple and easy to set up

## API Endpoints

1. **Featured Categories**
   - Endpoint: `GET /api/featured-categories`
   - Returns list of featured categories with their details

2. **Trending Products**
   - Endpoint: `GET /api/trending-products`
   - Returns list of currently trending products

3. **Best Selling Products**
   - Endpoint: `GET /api/best-selling-products`
   - Returns list of best-selling products with sales data

4. **Banners**
   - Endpoint: `GET /api/banners`
   - Returns list of active promotional banners

## Prerequisites

- Node.js 
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:j808544j/assignment-temp.git
   cd <repository-name>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```

2. The server will start running on `http://localhost:3000`

## Testing the API

You can test the API endpoints using tools like Postman, cURL, or any HTTP client:

```bash
# Get featured categories
curl http://localhost:3000/api/featured-categories

# Get trending products
curl http://localhost:3000/api/trending-products

# Get best selling products
curl http://localhost:3000/api/best-selling-products

# Get banners
curl http://localhost:3000/api/banners
```

## Project Structure

```
├── server.js              # Main application file
├── package.json          # Project dependencies and scripts
├── data/                 # JSON data files
│   ├── featuredCategories.json
│   ├── trendingProducts.json
│   ├── bestSellingProducts.json
│   └── banners.json
└── README.md            # Project documentation
```

## Dependencies

- express: ^4.18.2
- cors: ^2.8.5

