import mongoose from "mongoose";

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECT_MONGO_DB);
    console.log('Connected to mongodb')
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB
