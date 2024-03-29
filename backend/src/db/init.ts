/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mongodb:27017/');

    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
