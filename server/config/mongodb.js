import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", async () => {
    console.log(`Connected to Database : ${mongoose.connection.host}`);
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/mern-auth`);
};

export default connectDB;
