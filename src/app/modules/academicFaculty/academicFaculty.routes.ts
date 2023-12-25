import express from 'express';
import { AcademicFacultyValidation } from './academicFaculty.validation';
import { AcademicFacultycontroller } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();
router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultycontroller.createFaculty,
);
router.get('/:id', AcademicFacultycontroller.getSingleFaculty);
router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updatefacultyZodSchema),

  AcademicFacultycontroller.updateFaculty,
);

router.delete(
  '/:id',

  AcademicFacultycontroller.deleteFaculty,
);
router.get('/', AcademicFacultycontroller.getallFaculties);

export const AcademicFacultyRoutes = router;
