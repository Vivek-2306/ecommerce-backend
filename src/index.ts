import express, { Request, Response } from 'express';
import { SERVER_PORT } from './config/Config';
import connectDB from './services/DBService';
import bodyParser from 'body-parser';
import { AppRoutes } from './routes/AppRoutes';
import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import formatResponse from './middlewares/FormatResponse';
import { StatusCodes } from 'http-status-codes';
import Logger from './utils/Logger';

const app = express();
const logger = new Logger('Server');

app.use(express.json());
app.use(bodyParser.json());
app.use(mongoSanitize());
app.use(hpp());
app.use(cookieParser());
app.use(helmet());
app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 300,
    statusCode: StatusCodes.TOO_MANY_REQUESTS,
    message: 'Too many requests, please try again later',
    handler: function (req: Request, res: Response) {
      res
        .status(StatusCodes.TOO_MANY_REQUESTS)
        .json(
          formatResponse(
            StatusCodes.TOO_MANY_REQUESTS,
            true,
            null,
            this.message,
            null,
          ),
        );
    },
  }),
);

app.use(AppRoutes)

app.listen(SERVER_PORT, () => {
  connectDB()
    .then(() => {
      logger.info(`Server is running on port  ${SERVER_PORT}`)
    })
    .catch((error: any) => logger.error(error))
})
