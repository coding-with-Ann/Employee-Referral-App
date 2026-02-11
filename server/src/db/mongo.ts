import mongoose from 'mongoose';

const DEFAULT_URI = 'mongodb://127.0.0.1:27017/employee_referral_app';

export const connectMongo = async () => {
  const uri = process.env.MONGODB_URI || DEFAULT_URI;
  await mongoose.connect(uri);
  console.log(`MongoDB connected: ${uri}`);
};

