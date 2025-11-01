const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

const userModel = require("./models/user");

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/create", function (req, res) {
  let { username, email, password, age } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      const createdUser = await userModel.create({
        username,
        email,
        password: hash,
        age,
      });

      var token = jwt.sign({ email: "email" }, "secretkey");
      res.cookie("token", token);

      res.send(createdUser);
    });
  });
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", async function (req, res) {
  let user = await userModel.findOne({ email: req.body.email });
  if (!user) return res.send("Something is Wrong");

  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (result) {
      var token = jwt.sign({ email: user.email }, "secretkey");
      res.cookie("token", token);
      res.send("Yes, You can Login");
    } else {
      res.send("Something is Wrong");
    }
  });
});

app.get("/logout", function (req, res) {
  res.cookie("token", "");
  res.redirect("/");
});

app.listen(3000);
