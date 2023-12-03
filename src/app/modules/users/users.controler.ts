import { Request, Response } from 'express';
import { createUser, getUser } from './users.services';
export const getUserFromDb = async (req: Request, res: Response) => {
  const users = await getUser();
  res.status(200).json({
    status: 'successfull',
    data: users,
  });
};
export const createUserToDB = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const user = await createUser(data);
    res.status(200).json({ status: 'successfully created user', data: user });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: 'Failed to create user',
    });
  }
};
