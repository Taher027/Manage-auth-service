import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
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

//testing
// app.get('/', async (req, res, next) => {
//   throw new Error('testing Error Loger');
// });
export default app;
