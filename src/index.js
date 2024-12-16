import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import router from "./routes/index.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

(async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, { dbName: DB_NAME });

    app.use("/api/v1", router);

    app.listen(port, () => {
      console.log("server listening on port: " + port);
    });
  } catch (error) {
    console.error(error);
  }
})();
