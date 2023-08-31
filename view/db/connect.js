const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://mashruaadhyaaa:2121@nodeexpressproj.mnlxzfv.mongodb.net/studentinfo?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  });
};

module.exports = connectDB