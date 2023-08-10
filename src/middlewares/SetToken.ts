import { Request, Response, NextFunction } from 'express';

const SetToken = (req: Request, res: Response, next: NextFunction) => {
  const { accessToken = null, uid = null } = req.cookies;
  req.headers['authorization'] = accessToken;
  req.headers['uid'] = uid;
  next();
};

export default SetToken;
