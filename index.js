const http = require("http");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const server = http.createServer((req, res) => {
    const url=req.url.split("/");

  if (req.url === "/") {
    res.end("<h1>Hello</h1>");
  } else if (url[1] === "html") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.end(data);
      }
    });
  } else if (url[1] === "json") {
    fs.readFile("index.json", (err, data) => {
      if (err) {
        console.error(err);
      } else {
        res.end(data);
      }
    });
  } else if (url[1] === "uuid") {
    const uuid=uuidv4();
    res.end(`{"uuid":"${uuid}"}`);
  } else if (url[1] == `status`) {
    res.statusCode=Number(url[2]);
    res.end(`<h1>${http.STATUS_CODES[url[2]]}</h1>`);
  }else if (url[1] == `delay`) {
    res.statusCode=200;
    res.setTimeout(Number(url[2])*1000,()=>{
        res.end(`<h1>OK</h1>`);
    })
    
  } else {
    res.end(`<h1>Page not found ${req.url}</h1>`);
  }
});

server.listen(3000, () => {
  console.log("server is working....!!!");
});
