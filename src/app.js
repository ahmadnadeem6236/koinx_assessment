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

let counter = 0;

// save crypto data on intialize and after every 2 hours.
saveCryptoData();
cron.schedule("0 */2 * * *", () => {
  counter += 1;
  saveCryptoData();
  console.log(`Task is run ${counter} times`);
});

app.use("/", router);

export { app };
