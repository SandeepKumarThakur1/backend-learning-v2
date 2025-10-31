const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
var jwt = require("jsonwebtoken");

app.use(cookieParser());

app.get("/", function (req, res) {
  var token = jwt.sign({ email: "demo@gmail.com" }, "privateKey");
  // console.log(token);
  res.cookie("token", token);
  res.send("jsonwebtoken");
});

app.get("/read",function(req,res){
    // console.log(req.cookies.token)
    let data = jwt.verify(req.cookies.token, "privateKey");
    console.log(data);
    res.send("Read Page View JWT Token in Console...!");
})

app.listen(3000);