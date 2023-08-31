const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "cant be more than 20 characters"],
  },

  // change

  // new change 

  // second change 

  password: {
    type: String,
    required: [true, "must provide a password"],
    trim: true,
  },

  start_date: {
    type: Date,
    default: 9 - 9 - 2009,
  },
  end_date: {
    type: Date,
    default: 9 - 9 - 2009,
  },
});

module.exports = mongoose.model("Students", StudentSchema);
