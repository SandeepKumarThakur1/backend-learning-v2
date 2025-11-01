const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.use(cookieParser());

app.get("/", function (req, res) {
    // Cookies Set
    res.cookie("name","sandeep")
    res.send("Home Page With Cookies");
});

app.get("/read", function(req, res){
    // Read Cookies
    console.log(req.cookies)
    res.send("Read Page in Console Cookies value print")
})

app.listen(3000);
