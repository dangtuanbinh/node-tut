const http = require("http");

// Create the server. 'req' is request of user, 'res' is the result that server sending back. Both are object
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("This is about page");
  } else {
    res.end(`
 <h1>Sorry we cannot find your page </h1>
 <a href="/">Go back home</a>
 `);
  }
});

// Set up server's port
server.listen(5000);
