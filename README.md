# B2C Marketplace Backend

A simple Express.js backend for a B2C marketplace that provides REST APIs for featured categories, trending products, best-selling products, and banners.


## Prerequisites

- Node.js
- MongoDB
- npm

## Installation

1. Clone the repository
```bash
git clone git@github.com:j808544j/assignment-temp.git
cd <project-directory>
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file


## Running the Application

```bash
npm run dev
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

## 📁 Project Structure

- `src/`
  - `models/` – Mongoose schemas
    - `Product.js` – Product schema
    - `Category.js` – Category schema
    - `Banner.js` – Banner schema
  - `routes/` – API routes
  - `config/` – Configuration files (e.g., DB connection)
- `server.js` – Entry point of the application
- `package.json` – Project dependencies and scripts
- `README.md` – Project documentation


## Dependencies

- express
- mongoose
- cors
- dotenv

