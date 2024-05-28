const { mongoose } = require("mongoose");

const ClientShcema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: String
  }
})

module.exports = mongoose.model("Client", ClientShcema)
