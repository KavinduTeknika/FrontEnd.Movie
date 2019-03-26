
const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

const middlewares = jsonServer.defaults();
server.use(middlewares);

// // To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
// server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function(req, res, next) {
  setTimeout(next, 2000);
});

// Add createdAt to all POSTS
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  // Continue to JSON Server router
  next();
});

server.post("/movies/", function(req, res, next) {
  const error = validateMovieMockData(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    next();
  }
});

// Use default router
server.use(router);

// Start server
const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

function validateMovieMockData(movie) {
  if (!movie.MovieTitle) return "Title of the movie is required.";
  if (!course.Price) return "Price of the movie is required.";
  if (!course.ReleasedYear) return "Released year of the movie is required.";
  return "";
}
