const express = require("express");
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", function (req, res) {
  res.send("Hello");
});

app.get("/create", async function (req, res) {
  const user = await userModel.create({
    username: "Sandeep",
    email: "sandeep@gmail.com",
    age: 45,
  });
  res.send(user);
});

app.get("/post/create", async function (req, res) {
  let post = await postModel.create({
    postdata: "Hey, I'm Sandeep Kumar, a Frontend Developer.",
    user: "6905b486bc208c230046604f",
  });

  let user = await userModel.findOne({ _id: "6905b486bc208c230046604f" });
  user.posts.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000);
