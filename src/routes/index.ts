import express from "express";
import weatherRoute from "./weather.route";

const router = express.Router();

router.use("/", weatherRoute);

export default router;
