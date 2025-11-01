const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.get("/", function (req, res) {
  // bcrypt.genSalt(10, function (err, salt) {
  //   console.log(salt)
  //   bcrypt.hash("pass7854#@", salt, function (err, hash) {
  //     console.log(hash)
  //   });
  // });

  // pass7854#@
  // $2b$10$Xv.AK72bzsKd8TqDfhozYejQ3ne63oYpZJ.yj5brxrb8X7zMLJlry

  bcrypt.compare("pass7854#@", "$2b$10$Xv.AK72bzsKd8TqDfhozYejQ3ne63oYpZJ.yj5brxrb8X7zMLJlry").then(function (result) {
      console.log(result) // True
  });
  
  res.send("Create Bcrypt");
});

app.listen(3000);
