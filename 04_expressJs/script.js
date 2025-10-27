import express from "express";

const app = express();

// Route
// app.get(route, requestHandler) -- here requestHandler is also a middleware

// middleware
app.use(function (req, res, next) {
  console.log("middleware ..........");
  next();
});

app.get("/", function (req, res) {
  res.send("This is Home Page.");
});

app.get("/about", function (req, res, next) {
  // res.send("This is About Page.")
  return next(new Error("Somthing went wromg !"));
});

// Error Handling in Express
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);
