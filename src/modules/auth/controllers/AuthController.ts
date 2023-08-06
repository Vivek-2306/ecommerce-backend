import { Request, Response } from 'express'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import AuthManager from '../managers/AuthManager'
import formatResponse from '../../../middlewares/FormatResponse'

class AuthController {
  async register(req: Request, res: Response) {
    const result = await new AuthManager(req).register()
    return res
      .status(StatusCodes.OK)
      .json(
        formatResponse(StatusCodes.OK, false, null, ReasonPhrases.OK, result),
      )
  }
}

export default AuthController
