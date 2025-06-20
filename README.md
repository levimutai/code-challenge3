# code-challenge3

# Blog Post Manager

A simple blog post manager web application built with vanilla JavaScript, HTML, and CSS. This app allows users to view, add, edit, and delete blog posts using a mock REST API powered by `json-server`.

## Features

- View a list of all blog post titles and images
- Click a post title to view its details (title, content, author, image)
- Add a new blog post using a form
- Edit an existing post’s title and content
- Delete a post
- Responsive and clean UI

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/levimutai/code-challenge3.git
cd code-challenge3
```

### 2. Install `json-server` globally (if you haven’t already)

```bash
npm install -g json-server@0.17.4
```

### 3. Add sample data to `db.json`

Edit the `db.json` file and add some initial posts, for example:

```json
{
  "posts": [
    {
      "id": 1,
      "title": "First Post",
      "content": "This is my first blog post!",
      "author": "Alice",
      "image": "https://via.placeholder.com/150"
    },
    {
      "id": 2,
      "title": "Second Post",
      "content": "Another post for testing.",
      "author": "Bob",
      "image": "https://via.placeholder.com/150"
    }
  ]
}
```

### 4. Start the mock API server

```bash
json-server db.json
```

The API will be available at [http://localhost:3000](http://localhost:3000).

### 5. Open the frontend

You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code or simply open `index.html` in your browser.

---

## API Endpoints

- `GET /posts` - Retrieve all blog posts
- `GET /posts/:id` - Retrieve a single blog post by ID
- `POST /posts` - Create a new blog post
- `PATCH /posts/:id` - Update an existing blog post
- `DELETE /posts/:id` - Delete a blog post

---

## Project Structure

```
.
├── db.json
├── index.html
├── index.js
├── style.css
└── README.md
```

---

## Learning Goals

- Access and display data from an API using GET requests
- Listen for user events and update the DOM in response
- (Advanced) Send data to an API using POST, PATCH, and DELETE requests

---

## Credits

Created for Moringa School Phase 1 Code Challenge.
