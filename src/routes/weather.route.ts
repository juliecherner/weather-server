import express from "express";
import * as currentWeatherController from "../controllers/weather.controller";
const route = express.Router();

route.post("/current-temperature", currentWeatherController.findByCityName);

export default route;
