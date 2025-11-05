const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userModel = require("./models/user");
const postModel = require("./models/post");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.render("index");
});

app.post("/register", async function (req, res) {
  let { username, name, email, age, password } = req.body;

  // Check if Email is found or not
  let user = await userModel.findOne({ email });
  if (user)
    return (
      res.status(500),
      res.send("User already registered, Create another User !")
    );

  // Password Bcrypt with send cookies
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      const user = await userModel.create({
        username,
        name,
        email,
        age,
        password: hash,
      });

      let token = jwt.sign({ email: email, userid: user._id }, "Shhhh");
      res.cookie("token", token);
      res.send("Registered User");
    });
  });
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/login", async function (req, res) {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) return res.status(500), res.send("User are not found !");

  bcrypt.compare(password, user.password, function (err, result) {
    if (result) return res.send("You are logined now.");
    else res.redirect("/");
  });
});

app.get("/logout", function (req, res) {
  res.cookie("token", "");
  res.send("You Logout Now!");
});

app.listen(3000);
