# Blog Post Backend

## Overview

This is the backend component of the Blog Post application, built using Node.js, Express.js, and MongoDB. The application provides RESTful API endpoints for managing blog posts.

## Prerequisites

- Node.js installed on your machine.
- Rename `example.env` to `.env` and update the variables accordingly. (Super security, I know!)

## Getting Started

**Clone the Repository:**

   ```bash
   git clone https://github.com/blystsiv/blog.git
   cd server
   ```

**Install Dependencies:**

   ```bash
   npm install
   ```

**Update Environment Variables:**

   - Rename `example.env` to `.env`.
   - I deliberately include the `example.env` file with all required environment variables to make it easier for you to get started. However, it is not a good practice to include sensitive information in repo.

**Run the Application Locally:**

   ```bash
   npm run dev
   ```

   The server will start at http://localhost:3333

# API Endpoints

## Create a New Post

- **Endpoint:** `POST /v1/posts`
- **Request Body:**
  ```json
  {
    "title": "Your Post Title",
    "description": "Your Post Description",
    "author": "Post Author"
  }
  ```

## Get All Posts

- **Endpoint:** `GET /v1/posts`

## Get a Single Post by ID

- **Endpoint:** `GET /v1/posts/:id`

## Update a Post by ID

- **Endpoint:** `PUT /v1/posts/:id`
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "description": "Updated Description",
    "author": "Updated Author"
  }
  ```

## Delete a Post by ID

- **Endpoint:** `DELETE /v1/posts/:id`

## Contributing

Feel free to contribute to the development of this project by creating issues or pull requests 😀
