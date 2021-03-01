// const http = require("http");
const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
// const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", (req, res, next) => {
//   console.log("Main Page");
//   // res.send("<h1>Hello from Hanif</h1>");
//   next();
// });

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).send("<h1>The Page not found</h1>");
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});
// const server = http.createServer(routes.handler);

app.listen(3000);
// const server = http.createServer(app);
// server.listen(3000);
