import express from 'express'
import AuthRoutes from '../modules/auth/routes/AuthRoutes'

const app = express()

app.use('/auth', AuthRoutes)

export { app as AppRoutes }
