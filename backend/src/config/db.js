import mongoose from "mongoose";

// const MONGO_URL = "mongodb://localhost:27017/login";
const MONGO_URL = "mongodb+srv://fernando_rayas:RA159357%#21sep@cluster0.n5z55xl.mongodb.net/login?retryWrites=true&w=majority&appName=Cluster0";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connect mongoDB");
  } catch (err) {
    console.log(err);
  }
};
