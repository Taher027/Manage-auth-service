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

router.get('/:id', academicSemesterController.getSingleSemester);
router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.updateAcademiSemesterZodSchema),
  academicSemesterController.updateSemester,
);
router.delete('/delete/:id', academicSemesterController.delteAcademicSemester);
router.get('/', academicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
