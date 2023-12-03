import express from 'express';
import { createUserToDB, getUserFromDb } from './users.controler';
const router = express.Router();

router.get('/', getUserFromDb);
router.post('/create-user', createUserToDB);

export default router;
