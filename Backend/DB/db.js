const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://localhost:27017/practice", {
  });
  console.log("Database is connected");
} catch (error) {
  console.log(error);
}
 
