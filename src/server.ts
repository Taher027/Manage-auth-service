import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorLogger, logger } from './shared/logger';

async function dbConnected() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('Database Connected Successfull');
    app.listen(config.port, () => {
      logger.info(`Application listening on port  ${config.port}`);
    });
  } catch (err) {
    errorLogger.error('database connected failed!', err);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

dbConnected();
