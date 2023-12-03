import { User } from './users.model';
import { IUser } from './users.interface';
import config from '../../../config';
import { generatedUserId } from './user.utils';
export const getUser = async (): Promise<IUser[]> => {
  const user = await User.find({});
  return user;
};
export const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generatedUserId();

  user.id = id;
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createUser) {
    throw new Error('Failed to create User');
  }
  return createdUser;
};
