# Sobziwala POS - Backend API

Node.js + Express + MongoDB backend for Sobziwala POS.

## Quick Start

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## API Endpoints

### Contacts
- `POST /api/contacts` - Create contact
- `GET /api/contacts` - Get all
- `GET /api/contacts/:id` - Get one
- `PUT /api/contacts/:id` - Update
- `DELETE /api/contacts/:id` - Delete

### Services
- `POST /api/services` - Create service
- `GET /api/services` - Get all
- `GET /api/services/:id` - Get one
- `PUT /api/services/:id` - Update
- `DELETE /api/services/:id` - Delete

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

## Database Models

### Contact
- name (required)
- email (required, valid)
- subject (optional)
- message (required)
- status (new/read/replied)

### Service
- title (required)
- description (required)
- category (implementation/training/support/development/migration/consulting)
- price (optional)
- active (boolean)

### User
- name (required)
- email (required, unique)
- password (required, hashed)
- role (admin/manager/staff)
- active (boolean)

## Dependencies

- express
- mongoose
- cors
- dotenv
- bcryptjs
- jsonwebtoken
- validator
