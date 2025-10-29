const express = require("express");
const app = express();

const userModal = require("./usermodal");

app.get("/", function (req, res) {
  res.send("Hello");
});

// Basic CURD

// Create
app.get("/create", async function (req, res) {
  const createdUser = await userModal.create({
    name: "Ram",
    username: "ramkumar98@",
    email: "ram@gmail.com",
  });
  res.send(createdUser);
});

// Read
app.get("/read", async function (req, res) {
  // const viewUser = await userModal.findOne()
  const viewUser = await userModal.find({ name: "Ram" });
  res.send(viewUser);
});

// Update
app.get("/update", async function (req, res) {
  const updatedUser = await userModal.findOneAndUpdate(
    { username: "sandeep98@" },
    { name: "Sandeep Kumar Thakur" }
  );
  res.send(updatedUser);
});

// Delete
app.get("/delete", async function (req, res) {
  const deletedUser = await userModal.findOneAndDelete({ username: "ramkumar98@" });
  res.send(deletedUser);
});

app.listen(3000);
