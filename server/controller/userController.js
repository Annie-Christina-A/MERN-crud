const userModel = require("../Schema/userSchema");

exports.createUser = async (req, res) => {
  try {
    const user = await userModel.create({
      Name: req.body.Name,
      email: req.body.email,
      password: req.body.password,
      contact: req.body.contact,
    });

    if (user) {
      return res.status(201).json({ message: "successfull", data: user });
    }
    return res.status(400).json({ message: "Not Created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.id);

    if (user) {
      return res.status(201).json({ message: "successfull", data: user });
    }
    return res.status(400).json({ message: "Not Created" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
