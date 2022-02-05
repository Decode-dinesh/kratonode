const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoute = require('./routes/user');

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, () => {
  console.log("connected to db");
})


app.use("/user", userRoute);

app.listen(8800,()=>{
    console.log("server started port at 8800");
})