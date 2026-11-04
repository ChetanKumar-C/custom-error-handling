
# Custom Error Handling in Node.js

## Project Overview

This project implements a reusable custom error-handling mechanism using Node.js and Express.js.

It allows developers to throw dynamic errors with custom messages and HTTP status codes from service and controller functions.

A centralized error-handling middleware catches errors and returns consistent JSON responses to clients.



## Features

- Reusable Custom Error Class (AppError)
- Centralized Global Error Handling Middleware
- Asynchronous Error Handling using asyncHandler
- Dynamic error messages and HTTP status codes
- Consistent JSON error responses
- Separation of Controllers and Services
- Support for HTTP status codes:
  - 400 - Bad Request
  - 401 - Unauthorized
  - 403 - Forbidden
  - 404 - Not Found
  - 409 - Conflict
  - 500 - Internal Server Error



## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman
- Git and GitHub



## Project Structure

```text
custom-error-handling/
│
├── src/
│   ├── controllers/
│   │   └── studentController.js
│   │
│   ├── services/
│   │   └── studentService.js
│   │
│   ├── middleware/
│   │   └── errorMiddleware.js
│   │
│   ├── utils/
│   │   └── asyncHandler.js
│   │
│   ├── errors/
│   │   └── AppError.js
│   │
│   ├── routes/
│   │   └── studentRoutes.js
│   │
│   └── app.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd custom-error-handling
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Welcome message |
| GET | /students | Get all students |
| GET | /students/:id | Get student by ID |
| POST | /students | Create a student |
| GET | /test-401 | Test 401 error |
| GET | /test-403 | Test 403 error |
| GET | /test-500 | Test 500 error |