import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile/:username", function (req, res) {
  res.send(req.params.username);
});

app.get("/profile/:username/:age", function (req, res) {
  res.send(`Welcome ${req.params.username} of age ${req.params.age}`);
});

app.listen(3000);
