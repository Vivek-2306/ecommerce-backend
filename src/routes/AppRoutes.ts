import express, { Router } from 'express';
import AuthRoutes from '../modules/auth/routes/AuthRoutes';
import SetToken from '../middlewares/SetToken';
import formatResponse from '../middlewares/FormatResponse';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import Tokens from 'csrf';

const router: Router = express.Router();

router.use(SetToken);

router.route('/api/v1/auth/csrftoken').get(async (req: any, res: any) => {
  const tokens = new Tokens();
  const secret = await tokens.secret();
  const token = tokens.create(secret);
  res.json(
    formatResponse(StatusCodes.OK, false, null, ReasonPhrases.OK, {
      csrfToken: token,
    }),
  );
});

router.use('/api/v1/auth', AuthRoutes);

export { router as AppRoutes };
