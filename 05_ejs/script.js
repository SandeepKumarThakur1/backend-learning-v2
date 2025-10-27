import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// ES Module doesn't support __dirname, so define it manually:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Correct way to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Correct view engine syntax
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("index"); // Make sure views/index.ejs exists
});

// Server
app.listen(3000, () => {
  console.log("Server is running on port 3000...");
});
