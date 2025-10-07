# NestJS Boilerplate

A robust, production-ready REST API backend built with NestJS, featuring authentication, database support, file uploads, mailing, and more.

## Features

- **Framework**: NestJS with TypeScript and strict type safety
- **Databases**: PostgreSQL with TypeORM and MongoDB with Mongoose
- **Authentication**: JWT-based auth with Passport.js
- **API Documentation**: Swagger/OpenAPI
- **Validation**: Class-validator with global pipes
- **Versioning**: URI-based API versioning
- **Docker**: Containerized with Docker Compose
- **Configuration**: Environment-based config with @nestjs/config

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker and Docker Compose (for containerized setup)

### Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment file:
   ```bash
   cp .env.example .env
   ```
4. Update `.env` with your configuration
5. Start databases (if not using Docker):
   - PostgreSQL on port 5432
   - MongoDB on port 27017
6. Create the database:
   ```bash
   npm run db:create
   ```
7. Run the application:
   ```bash
   npm run start:dev
   ```

### Docker Setup

1. Build and run with Docker Compose:
   ```bash
   docker-compose up --build
   ```

## Environment Variables

Copy `.env.example` to `.env` and configure:

- `PORT`: Application port (default: 3000)
- `NODE_ENV`: Environment (development/production)
- `DB_*`: PostgreSQL configuration
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: JWT signing secret
- `MAIL_*`: Email configuration
- `AWS_*`: AWS S3 configuration
- `GOOGLE_*`, `FACEBOOK_*`, `APPLE_*`: Social login credentials

## API Endpoints

### Authentication

- `POST /v1/auth/register` - User registration
- `POST /v1/auth/login` - User login
- `POST /v1/auth/profile` - Get user profile (requires JWT)

### Health Check

- `GET /v1/health` - Health check endpoint

### Documentation

- Swagger UI: `http://localhost:3000/v1/docs`

## Project Structure

```
src/
├── app.controller.ts          # Main app controller
├── app.module.ts              # Root module
├── app.service.ts             # Main app service
├── config/
│   └── configuration.ts       # Config factory
├── database/
│   ├── database.module.ts     # TypeORM module
│   └── mongodb.module.ts      # Mongoose module
├── modules/
│   ├── auth/                  # Authentication module
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── dto/
│   │   ├── guards/
│   │   └── strategies/
│   └── user/                  # User module
│       ├── user.entity.ts
│       ├── user.module.ts
│       └── user.service.ts
├── main.ts                    # Application entry point
```

## Available Scripts

```bash
# Development
npm run start          # Start production build
npm run start:dev      # Start with hot reload
npm run start:debug    # Start with debugger
npm run start:prod     # Start production build

# Testing
npm run test           # Run unit tests
npm run test:watch     # Run tests in watch mode
npm run test:cov       # Run tests with coverage
npm run test:debug     # Run tests with debugger
npm run test:e2e       # Run e2e tests

# Linting & Formatting
npm run lint           # Run ESLint
npm run format         # Run Prettier

# Build
npm run build          # Build for production
```

## Docker Commands

```bash
# Build and start all services
docker-compose up --build

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f app
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run test`
5. Lint: `npm run lint`
6. Submit a pull request

## License

This project is licensed under the MIT License.
