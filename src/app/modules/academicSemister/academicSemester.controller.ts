import { AcademicSemesterService } from './academicSemester.services';
import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponce';
import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationsFields } from '../../../constant/pagination';
import { academicSemesterFilterableFields } from './academicSemesterConstance';

const createSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...createSemesterData } = req.body;

  const result =
    await AcademicSemesterService.createSemester(createSemesterData);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Aademic semester created successfully!',
    data: result,
  });
});
const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
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
});
const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicSemesterService.getSingleSemester(id);
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data found successfully',
    data: result,
  });
});
const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await AcademicSemesterService.updateSemester(id, updatedData);
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Data found successfully',
    data: result,
  });
});
const delteAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await AcademicSemesterService.deleteSemester(id);
    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester delete successfull',
      data: result,
    });
  },
);

export const academicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  delteAcademicSemester,
};
