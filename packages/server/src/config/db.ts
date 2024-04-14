import mongoose from "mongoose";
import "dotenv/config";

const PORT = process.env.MONGO_URI;

const connectDB = async () => {
  const conn = await mongoose.connect(PORT!);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
