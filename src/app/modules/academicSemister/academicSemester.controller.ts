import { AcademicSemesterService } from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponce';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pic';
import { paginationsFields } from '../../../constant/pagination';
import { academicSemesterFilterableFields } from './academicSemesterConstance';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...createSemesterData } = req.body;

    const result =
      await AcademicSemesterService.createSemester(createSemesterData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester create Successfull',
      data: result,
    });
    next();
  },
);
const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, paginationsFields);
    const filters = pick(req.query, academicSemesterFilterableFields);

    const result = await AcademicSemesterService.getAllsemester(
      filters,
      paginationOptions,
    );
    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
    next();
  },
);

export const academicSemesterController = {
  createSemester,
  getAllSemesters,
};
