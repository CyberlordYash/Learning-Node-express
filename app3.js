const express = require("express");
const app = express();
const logger = require("./logger");
const authorise = require("./autohrise");

//parse form data usign middleware
app.use(express.urlencoded({ extended: false }));
//req.body me data aa jayega jo send hua
console.log(req.data);
//req=>middleware=>res
//auto
app.use([logger, authorise]);
//nas yhi logger hi h middleware
//express automatically pass req and res to the fucntion logger
//next middleware pe pass krna hoga wrna loading hoti rhegi using next
//ya fir we can res.send and terminate the whole cycle
app.get("/", (req, res) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  res.send("<h1>Home yash</h1>");
});
//post method
app.post("/login", (req, res) => {
  res.send("post");
});
app.get("/about", logger, (req, res) => {
  res.send("<h1>About</h1>");
});
app.listen("5000", () => {
  console.log("server started");
});
