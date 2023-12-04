import { AcademicSemesterService } from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponce';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...createSemesterData } = req.body;

    const result =
      await AcademicSemesterService.createSemester(createSemesterData);
    next();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Academic Semester create Successfull',
      data: result,
    });
  },
);
export const academicSemesterController = {
  createSemester,
};
