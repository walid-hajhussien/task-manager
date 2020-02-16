const mongoose = require("mongoose");
const chalk = require("chalk");

//DB details
const dbName = "task-manager-api";
const dbLink = "mongodb://127.0.0.1:27017/";
const dbURL = dbLink + dbName;

mongoose.connect(dbURL, {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on("open", () => {
  console.log(chalk.green("mongoDB connected successfully"));
});

db.on("error", error => {
  console.log(chalk.green("mongoDB connection error", error));
});

// const User = mongoose.model("user", {
//   name: {
//     type: String
//   },
//   age: {
//     type: Number
//   }
// });

const Task = mongoose.model("task", {
  desicription: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const newTask = new Task({
  desicription: "welcome to rbk",
  completed: false
});

newTask.save();
