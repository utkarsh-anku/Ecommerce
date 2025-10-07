# E-commerce Backend API

A feature-rich e-commerce REST API backend built with NestJS, providing comprehensive functionality for online retail operations.

## Features

- **Core E-commerce Features**
  - Product management with categories and variants
  - Shopping cart functionality
  - Order processing and management
  - User reviews and ratings
  - Wishlist management

- **Technical Stack**
  - **Backend**: NestJS with TypeScript
  - **Databases**: PostgreSQL (primary) and MongoDB (for product catalogs)
  - **Authentication**: JWT with role-based access control
  - **Documentation**: Swagger/OpenAPI
  - **Infrastructure**: Docker containerization

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker and Docker Compose (optional)

### Local Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment:
   ```bash
   cp .env.example .env
   ```
4. Start the databases:
   ```bash
   docker-compose up -d postgres mongodb
   ```
5. Run migrations:
   ```bash
   npm run migration:run
   ```
6. Start the server:
   ```bash
   npm run start:dev
   ```

## API Documentation

Access the Swagger documentation at: `http://localhost:3000/v1/docs`

### Key Endpoints

- **Authentication**
  - `POST /v1/auth/register` - Customer registration
  - `POST /v1/auth/login` - User login
  
- **Products**
  - `GET /v1/products` - List products
  - `GET /v1/products/:id` - Get product details
  - `POST /v1/products` - Add product (Admin)
  
- **Cart**
  - `GET /v1/cart` - View cart
  - `POST /v1/cart/items` - Add to cart
  - `DELETE /v1/cart/items/:id` - Remove from cart

- **Orders**
  - `POST /v1/orders` - Create order
  - `GET /v1/orders` - List user orders
  - `GET /v1/orders/:id` - Get order details

## Environment Configuration

Key environment variables:

- `PORT`: API port (default: 3000)
- `NODE_ENV`: Environment (development/production)
- `DB_HOST`: PostgreSQL host
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: JWT secret key
- `STRIPE_KEY`: Stripe API key for payments

## Project Structure

```
src/
├── modules/
│   ├── products/         # Product management
│   ├── orders/          # Order processing
│   ├── cart/            # Shopping cart
│   ├── users/           # User management
│   ├── auth/            # Authentication
│   └── payment/         # Payment processing
├── common/              # Shared utilities
└── config/             # Configuration
```

## Development

```bash
# Development
npm run start:dev      # Start with hot reload
npm run test          # Run tests
npm run lint         # Run linting

# Production
npm run build       # Build application
npm run start:prod  # Run production build
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a pull request

## License

This project is licensed under the MIT License.
