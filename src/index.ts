import express, { Request, Response } from "express";
import { SERVER_PORT } from "./config/Config";
import connectDB from "./services/DBService";

const app = express();

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello Express JS",
  });
});

app.listen(SERVER_PORT, () => {
  connectDB()
    .then(() => {
      console.log(`Server is running on port ${SERVER_PORT}`);
    })
    .catch((error: any) => console.error(error));
});
