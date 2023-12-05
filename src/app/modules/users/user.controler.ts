import { Request, Response, NextFunction } from 'express';
import { userService } from './user.services';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponce';
const getUserFromDb = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await userService.getUser();

    res.status(200).json({
      status: 'successfull',
      data: users,
    });
    next();
  },
);
const createUserToDB = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await userService.createUser(data);
    next();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'user created successfully',
      data: result,
    });
  },
);
export const userController = {
  getUserFromDb,
  createUserToDB,
};
