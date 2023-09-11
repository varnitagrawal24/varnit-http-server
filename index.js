const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Hello</h1>");
  } else if (req.url === "/html") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/json") {
    fs.readFile("index.json", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.end(data);
      }
    });
  } else {
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(3000, () => {
  console.log("server is working....!!!");
});
