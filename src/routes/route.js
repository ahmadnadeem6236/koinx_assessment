import { statGetData } from "../controllers/statsControllers.js";
import express from "express";

const router = express.Router();

router.get("/stats", statGetData);

export default router;
