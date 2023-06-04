//sending files index.html
const express = require("express");
const app = express();
const path = require("path");
//css js files alag bhejne ki jrurat nhi sab public folder me save krdo
app.use(express.static("./public"));
//ish index ko bhi static me dal skte h
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});
app.listen(5000, () => {
  console.log("server working");
});
