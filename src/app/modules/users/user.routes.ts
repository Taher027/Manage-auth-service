import express from 'express';
import { userController } from './user.controler';
import validateRequest from '../../middlewares/validateRequest';
import { userValidation } from './user.validation';
const router = express.Router();

router.get('/', userController.getUserFromDb);
router.post(
  '/create-user',
  validateRequest(userValidation.createUserZodSchema),
  userController.createUserToDB,
);

export default router;
