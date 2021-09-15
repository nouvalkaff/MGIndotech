const express = require("express");

const route = express.Router();

const {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

route.post("/crt", createUser);
route.get("/all", getAllUser);
route.put("/upd/:id", updateUser);
route.delete("/del/:id", deleteUser);

module.exports = route;
