## How to run project

Clone the project

```bash
  git clone https://github.com/ankur-lakhmara/Blog-API-using-Node.js.git
```

Go to the project directory

Install dependencies

```bash
  npm install
```

Make sure MongoDB Compass already installed into your system

Start the server ( Run on localhost)

```bash
  npm run dev
```

Start the server (Run on server)

```bash
  npm start
```

```bash
  Check console for PORT
```

# API Reference

# 1. Create a blog post

```http
  POST /api/articles
```

##### JSON

```http
{
  "title": "Understanding Node.js and Express",
  "content": "This article explores the basics of Node.js and Express for building RESTful APIs...",
  "author": "John Doe",
  "tags": ["Node.js", "Express", "Backend", "JavaScript"]
}

```

# 2. Get all blogs

```http
  GET /api/articles
```


# 3. Get articles by ID

```http
  GET /api/articles/672b30eca12bfedb836bb0ac(replace the id with yours)
```
# 4. Update article

```http
  PUT /api/articles/672b32dd9758ef7b68fa6875 (replace the id with yours)
```

##### JSON

```http
{
  "title": "Understanding Node.js and asdadsassd",
  "content": "This article explores the basics of Node.js and Express for building RESTful APIs...",
  "author": "John Doe",
  "tags": ["Node.js", "Express", "Backend", "JavaScript"]
}

```
# 5. Delete article

```http
  DELETE /api/articles/672b32dd9758ef7b68fa6875 (replace the id with yours)
```

# 6. Search Anything

```http
  GET /api/articles/search?term=nodejs
```
