import express from 'express'
import { SERVER_PORT } from './config/Config'
import connectDB from './services/DBService'
import bodyParser from 'body-parser'
import { AppRoutes } from './routes/AppRoutes'

const app = express()

app.use(express.json())
app.use(bodyParser.json())

app.use(AppRoutes)

app.listen(SERVER_PORT, () => {
  connectDB()
    .then(() => {
      console.log(`Server is running on port  ${SERVER_PORT}`)
    })
    .catch((error: any) => console.error(error))
})
