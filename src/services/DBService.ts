import mongoose from 'mongoose'
import { MONGODB_URL } from '../config/Config'

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URL)
    console.log('DBService initialize successfully')
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connectDB
