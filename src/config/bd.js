import mongoose from "mongoose";

export const conectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/login");
    console.log(">>> Conectado a mongo");
  } catch (error) {
    console.log(error);
  }
};
