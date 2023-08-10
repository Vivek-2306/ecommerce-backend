import mongoose from 'mongoose'
import { MONGODB_URL } from '../config/Config'
import Logger from '../utils/Logger'

const logger = new Logger('Database')

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL)
    logger.info('DBService initialize successfully')
  } catch (error: any) {
    logger.error(error)
    process.exit(1)
  }
}

export default connectDB
