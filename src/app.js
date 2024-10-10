import express from "express";
import cors from "cors";
import saveCryptoData from "./helpers/fetchCryptoData.js";
import cron from "node-cron";
import router from "./routes/route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credential: true,
  })
);
const task = cron.schedule(
  "* 2 * * *",
  () => {
    saveCryptoData();
    console.log("Task run");
  },
  {
    scheduled: true,
  }
);

task.start();

app.use("/", router);

export { app };
