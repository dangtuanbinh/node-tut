const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("homepage");
  } else if (req.url === "/about") {
    // Blocking code
    for (i = 0; i < 1000; i++) {
      for (j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    // Blocking code will block the app to execute other rquest until the code is done
    res.end("about page");
  } else {
    res.end("pages");
  }
});

server.listen(5000);
