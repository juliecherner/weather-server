import { Request, Response } from "express";
import * as currentWeatherService from "../services/weather.service";
import { CustomExpressError } from "../types/index";

export const findByCityName = async (
  req: Request,
  res: Response
): Promise<void> => {
  const cityName = req.body;
  try {
    const temperatures = await currentWeatherService.findTemperatureByCity(
      cityName
    );
    res.status(200).send(temperatures);
  } catch (error: unknown) {
    res.status(500).send({ error: (error as CustomExpressError).message });
  }
};
