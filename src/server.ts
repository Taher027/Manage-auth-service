import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function dbConnected() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database Connected Successfull')
    app.listen(config.port, () => {
      console.log(`Application listening on port  ${config.port}`)
    })
  } catch (err) {
    console.log('database connected failed!', err)
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

dbConnected()
