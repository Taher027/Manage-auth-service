import z, { object } from 'zod';

const createUserZodSchema = z.object({
  body: object({
    role: z.string({ required_error: 'role is required' }),
    password: z.string().optional(),
  }),
});
export const userValidation = {
  createUserZodSchema,
};
