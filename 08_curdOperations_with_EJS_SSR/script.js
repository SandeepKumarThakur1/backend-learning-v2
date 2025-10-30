const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const userModal = require("./models/user");

app.get("/", function (req, res) {
  res.render("index");
});

// Create
app.post("/create", async function (req, res) {
  let { name, email, image, para } = req.body;
  let createdUser = await userModal.create({ name, email, image, para });
  res.redirect("/read");
});

// Read
app.get("/read", async function (req, res) {
  let allUsers = await userModal.find();
  res.render("read", { users: allUsers });
});

// Delete
app.get("/delete/:id", async function (req, res) {
  let deletedUser = await userModal.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
});

// edit
app.get("/edit/:userid", async function (req, res) {
  let updatedUser = await userModal.findOne({ _id: req.params.userid });
  res.render("edit", { user: updatedUser });
});

// update
app.post("/update/:userid", async function (req, res) {
  let { name, email, image, para } = req.body;
  let updatedUser = await userModal.findOneAndUpdate(
    { _id: req.params.userid },
    { name, email, image, para },
    { new: true },
  );
  res.redirect("/read");
});

app.listen(3000);
