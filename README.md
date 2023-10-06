# Contact-Management-App

Welcome to the Contact Management App repository! This application allows users to manage their contacts efficiently. It is built using Node.js, Express.js, and MongoDB.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Features

- Retrieve a list of contacts
- Add new contacts
- Update existing contacts
- Delete contacts
- User registration
- User login
- Retrieve current user details
- Retrieve contacts specific to the logged-in user
- Secure authentication and authorization mechanisms

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed
- MongoDB installed and running
- Git (optional, for cloning the repository)

## Getting Started

1. Clone the repository (if you haven't already):
   ```bash
   git clone https://github.com/Vidyadhar10/Contact-Management-App.git
2. Install project dependencies:
   ```bash
   cd contact-management-app
   npm install
3. Configure environment variables:
   Create a .env file in the root directory of the project and set the following environment
   variables:
    ```makefile
      PORT=3000
      CONNECTION_STRING=your-mongodb-connection-uri
      ACCESS_TOKEN_SECRET=your-secret-key
4. Start the application:
    ```bash
     npm start
5.Access the application at http://localhost:3000 in your browser.

## API Endpoints

-  `/api/contacts` (GET, POST, PUT, DELETE)
     * Retrieve, add, update, or delete contacts.
-  `/api/register` (POST)
     * Register a new user.
-   `/api/login` (POST)
     * Log in a user.
-   `/api/current` (GET)
     * Retrieve the details of the currently logged-in user.
      
For more details on each endpoint, refer to the API documentation in the codebase.

## Authentication
The app uses JWT (JSON Web Tokens) for user authentication. Ensure you provide a secure ACCESS_TOKEN_SECRET in your environment variables.

## Database
The application uses MongoDB as its database. Make sure to set the CONNECTION_STRING environment variable to your MongoDB connection URI.


Happy coding! 😁❣️

