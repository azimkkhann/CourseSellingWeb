const express = require("express");
const app = express();
const {route} = require("./routes/admin.routes");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DBConnection)
const cookieparser = require("cookie-parser");
app.use(express.json());
app.use(cookieparser())

app.use("/admin", route);


app.listen(3500);

