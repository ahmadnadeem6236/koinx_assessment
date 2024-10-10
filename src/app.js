import express from "express";
import cors from "cors";
import saveCryptoData from "./helpers/fetchCryptoData.js";

import router from "./routes/route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credential: true,
  })
);

saveCryptoData();

let minutes = 120,
  the_interval = minutes * 60 * 1000;

setInterval(() => {
  console.log("Running from every 2 hour");
  saveCryptoData();
}, the_interval);

app.use("/", router);

export { app };
