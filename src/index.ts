import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "dotenv";
import { corsConfig } from "../corsConfig";
import router from "./routes";

const app: Express = express();
app.use(helmet());

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
config();

app.use("/api", router);

app.get("/", function (req: Request, res: Response) {
  res.send("Welcome to Weather Server");
});

app.use((req: Request, res: Response) => {
  res.status(404).send("Endpoint is not found");
});

const serverPort = process.env.SERVER_PORT || 8080;

app.listen(serverPort, () => {
  console.log(`HTTP server started on port ${process.env.PORT || 8080} `);
});
