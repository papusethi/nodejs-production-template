import { NextFunction, Request, Response } from 'express';
import httpResponse from '../utils/httpResponse';
import responseMessage from '../constant/responseMessage';
import httpError from '../utils/httpError';

export default {
  self: (req: Request, res: Response, next: NextFunction) => {
    try {
      httpResponse(req, res, 200, responseMessage.SUCCESS, { id: '123' });
    } catch (err) {
      httpError(next, err, req, 500);
    }
  }
};
