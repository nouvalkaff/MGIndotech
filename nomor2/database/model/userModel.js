const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nama: {
    type: String,
  },
  hobi: {
    type: String,
  },
  alamat: {
    type: String,
  },
  nomor_telp: {
    type: Number,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;
