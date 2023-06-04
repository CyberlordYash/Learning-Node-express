const app = require("express")();
// const app=express()
//when server detected run this function
app.get("/", (req, res) => {
  res.send("yash");
});
app.get("/about", (req, res) => {
  res.send("about");
});
//for 404 response
app.all("*", (req, res) => {
  res.status(404).send("error");
});
app.listen(5000, () => {
  console.log("server is working");
});
