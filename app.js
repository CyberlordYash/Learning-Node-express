const { readFileSync } = require("fs");
const homePage = readFileSync("./index.html");
console.log("Express tutorial");
const http = require("http"); //built in h ye
const server = http.createServer((req, res) => {
  console.log(req.statusCode);
  console.log("hi");
  res.write(homePage);
  res.end();
});

server.listen(5000);
