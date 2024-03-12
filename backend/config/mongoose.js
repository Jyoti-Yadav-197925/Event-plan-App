import mongoose from "mongoose";

export const mongooseDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "Event_Plan_DB",
    })
    .then(() => {
      console.log("DataBase has been connected !");
    })
    .catch((e) => {
      console.log("error in connecting database", e);
    });
};

