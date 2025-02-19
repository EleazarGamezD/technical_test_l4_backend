# Task Management System

This is a Task Management System built with NestJS. It allows you to create, read, update, and delete tasks.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MySQL database

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/EleazarGamezD/technical_test_l4_backend.git
   cd tecnical_test_l4_backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   APP_NAME=TaskManagementSystem
   PORT=3000
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=task_management
   DB_USER=root
   DB_PASS=password
   DB_SSL=false
   STAGE=dev
   BD_TYPEORM_LOGGING=true
   ```

## Running the Application

1. Start the MySQL database and ensure the credentials match those in the `.env` file.

2. Run the application:

   ```bash
   npm run start
   ```

3. The application will be available at `http://localhost:3000`.

## API Documentation

The API documentation is available at `http://localhost:3000` once the application is running.


## License

This project is licensed under the MIT License.
