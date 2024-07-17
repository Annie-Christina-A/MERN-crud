const { default: mongoose } = require("mongoose");

const db = async () => {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/Mern")
      .then((res) => console.log("connect"));
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
