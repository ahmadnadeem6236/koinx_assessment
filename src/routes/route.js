import { deviationGetData } from "../controllers/deviationControllers.js";
import { statGetData } from "../controllers/statsControllers.js";
import express from "express";

const router = express.Router();

router.get("/stats", statGetData);
router.get("/deviation", deviationGetData);

export default router;
