import express from 'express';
import { academicSemesterValidation } from './academicSemesterValidation';
import { academicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.createAcademiSemesterZodSchema),
  academicSemesterController.createSemester,
);

export default router;
