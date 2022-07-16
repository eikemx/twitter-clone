const User = require("../models/User");

const list_users = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const create_users = async (req, res) => {
    const users = req.body;
  
    try {
      const createdUsers = await User.create(users);
      res.json(createdUsers);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  module.exports = {
    list_users,
    create_users,
  };