const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //   res.send("testing");
  next();
  //next middleware ko pass kr dia
};

module.exports = logger;
