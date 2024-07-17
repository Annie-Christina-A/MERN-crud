const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const db = require("./db/db");
const userRote = require("./Routes/userRoutes");

dotenv.config({ path: path.join(__dirname, "./config.env") });
//middleware
app.use(express.json());
//cors
app.use(cors());
app.options("*", cors());

app.use("/", userRote);

db();

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
