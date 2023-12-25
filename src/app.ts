import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
const app: Application = express();

//middle ware
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
app.use('/api/v1', routes);

//global error handler
app.use(globalErrorHandler);

// handle not found routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

//testing
// app.get('/', async (req, res, next) => {
//   throw new Error('testing Error Loger');
// });
export default app;
