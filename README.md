# Product Management Client - React + TypeScript + Vite

This is the frontend application for the Product Management System. It consumes the REST API to manage products.

## 🚀 Technologies

- **React 19** - UI Library
- **TypeScript** - Static typing
- **Vite** - Build tool and dev server
- **React Router DOM 7** - Routing (using Data APIs: Loaders and Actions)
- **Tailwind CSS 4** - Utility-first CSS framework
- **Axios** - HTTP Client
- **Valibot** - Schema validation

## 📋 Prerequisites

- Node.js >= 18.x
- npm or yarn
- The REST API Server running locally (usually on port 4000)

## 🔧 Installation

```bash
# Navigate to the client directory
cd client

# Install dependencies
npm install

# Configure environment variables (if required)
# Create a .env.local file to set the API URL (e.g., VITE_API_URL=http://localhost:4000)
```

## 🏃‍♂️ Running the app

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📦 Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Compiles TypeScript and builds the app for production.
- `npm run lint` - Runs ESLint to find issues in the code.
- `npm run preview` - Previews the production build locally.

## 📁 Project Structure

```text
src/
├── components/  # Reusable UI components (ProductDetails, ProductForm, etc.)
├── helpers/     # Utility functions
├── layouts/     # Application layouts (Layout.tsx)
├── services/    # API interaction and data fetching (ProductServices.ts)
├── types/       # TypeScript type definitions
├── views/       # Page components (Products, NewProduct, EditProduct)
├── main.tsx     # Application entry point
├── router.tsx   # React Router configuration
└── index.css    # Global styles and Tailwind configuration
```

## ✨ Features

- **List Products:** View a list of all available products.
- **Add Product:** Create a new product with validation.
- **Edit Product:** Update existing product details.
- **Update Availability:** Quick toggle for product availability.
- **Delete Product:** Remove a product from the database.

## 👨‍💻 Author

Oscar Cosme
