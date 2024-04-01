import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    // @ts-ignore
    .connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT", 
      //dbName: "RESERVATIONS",
    })
    .then(() => {
      console.log("Connected to database successfully!");
    })
    .catch((err) => {
      console.log(`Some error occured while connecing to database: ${err}`);
    });
};