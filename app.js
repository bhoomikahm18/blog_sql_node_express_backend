require('dotenv').config();
const express = require('express');
// const mysql = require('mysql2');
const userRouter = require('./routes/user-routes.js');

// dotenv.config({path: './.env'});
const app = express();

app.use(express.json());
app.use("/api/user", userRouter);
// app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log(`Server Running on PORT ${PORT}`));