const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const FakeDB = require("./FakeDB");

mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  async () => {
    const fakeDB = new FakeDB();
    console.log("Starting populating DB");
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log("DB has been populated!");
  }
);
