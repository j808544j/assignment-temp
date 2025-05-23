# B2C Marketplace Backend

A simple Express.js backend for a B2C marketplace that provides REST APIs for featured categories, trending products, best-selling products, and banners.

## Features

- Featured Categories API
- Trending Products API
- Best Selling Products API
- Banners API
- MongoDB Integration

## Prerequisites

- Node.js
- MongoDB
- npm

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file


## Running the Application

```bash
npm start
```

The server will start running on `http://localhost:3000`

## API Endpoints

1. Featured Categories
   - GET `/api/featured-categories`

2. Trending Products
   - GET `/api/trending-products`

3. Best Selling Products
   - GET `/api/best-selling-products`

4. Banners
   - GET `/api/banners`

## Project Structure

├── src/
│ ├── models/ 
│ │ ├── Product.js
│ │ ├── Category.js
│ │ └── Banner.js
│ ├── routes/ # API routes
│ └── config/ # Configuration files
├── server.js # Main application file
├── package.json # Project dependencies
└── README.md # Project documentation

## Dependencies

- express
- mongoose
- cors
- dotenv

## License

MIT