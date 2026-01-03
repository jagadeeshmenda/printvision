const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => res.render("index"));
app.get("/machines", (req, res) => res.render("machines"));
app.get("/inks", (req, res) => res.render("inks"));
app.get("/accessories", (req, res) => res.render("accessories"));
app.get("/services", (req, res) => res.render("services"));
app.get("/contact", (req, res) => res.render("contact"));

app.get("/machines/epson", (req, res) => {
  res.render("epson");
});

app.get("/enquire", (req, res) => {
  res.render("enquire", {
    machine: req.query.machine,
    brand: req.query.brand
  });
});




// Coming soon brands
app.get("/machines/canon", (req, res) => {
  res.render("coming-soon", { brand: "CANON" });
});

app.get("/machines/dlican", (req, res) => {
  res.render("coming-soon", { brand: "DLICAN" });
});

app.get("/machines/taimes", (req, res) => {
  res.render("coming-soon", { brand: "TAIMES" });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


