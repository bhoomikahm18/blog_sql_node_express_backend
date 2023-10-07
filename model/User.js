// const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     minlength: 6,
//   },
//   blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }],
// });

// module.exports = mongoose.model("User", userSchema);

const mysql = require('mysql');
const connection = require('../app.js');
const sql = connection.query('CREATE TABLE USER (ID INT AUTO_INCREMENT, NAME VARCHAR(20) NOT NULL,EMAIL VARCHAR(50) UNIQUE NOT NULL,PASSWORD VARCHAR(6) NOT NULL;');
module.exports = sql;