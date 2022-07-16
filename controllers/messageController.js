const Message = require("../models/Message");

const list_messages = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.json(messages);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const find_message = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.findById(id);
    if (!message) return res.status(404).send("No tweet found!");

    res.json({ message });
  } catch (error) {
    console.log(error.message);
  }
};

const create_messages = async (req, res) => {
    const messages = req.body;
  
    try {
      const createdMessage = await Message.create(messages);
      res.json(createdMessage);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  module.exports = {
    list_messages,
    find_message,
    create_messages,
  };