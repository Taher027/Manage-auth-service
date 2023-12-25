import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
import { ENUM_USER_role } from '../../../enums/users';
import auth from '../../middlewares/auth';
const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser,
);

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken,
);
router.post(
  '/change-password',
  auth(
    ENUM_USER_role.SUPER_ADMIN,
    ENUM_USER_role.ADMIN,
    ENUM_USER_role.FACULTY,
    ENUM_USER_role.STUDENT,
  ),
  validateRequest(AuthValidation.changePasswordZodSchema),
  AuthController.changePassword,
);

export const AuthRoutes = router;
