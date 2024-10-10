import express from "express";
import cors from "cors"
import saveCryptoData from "./helpers/fetchCryptoData.js";


const app = express()

app.use(
    cors({
    origin:process.env.CORS_ORIGIN,
    credential: true
})
)

saveCryptoData()



export { app }