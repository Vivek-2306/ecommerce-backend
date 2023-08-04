import express, { Request, Response } from "express";
import { SERVER_PORT } from "./config/Config";

const app = express();

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello Express JS",
  });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
