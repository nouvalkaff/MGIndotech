require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 1927;
require("./database/config")();

const userRoute = require("./routes/userRoute");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", userRoute);
app.get("/", (req, res) => {
  res.send("Welcome to PT. Maju Gemilang Indotech API");
});

app.all("*", (req, res) => {
  res.status(404).json({
    statusText: "Not Found",
    success: false,
    message: "THIS ROUTE IS SO QUIET AND EMPTY. IT HURTS.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
