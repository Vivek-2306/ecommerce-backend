import dotenv from 'dotenv'
dotenv.config()

const SERVER_PORT = process.env.SERVER_PORT
const MONGODB_URL = process.env.MONGODB_URL || ''

export { SERVER_PORT, MONGODB_URL }
