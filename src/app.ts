import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import userRouter from './app/modules/users/users.routes';
const app: Application = express();

//middle ware
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use('/api/v1/user', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World   !');
});

export default app;
