import Express from 'express'
import ezServe from 'ez-serve'
import * as dot from 'dotenv'
import { Routes } from './src/Routes'

dot.config()

const app = Express()
const PORT = Number(process.env.PORT) || 3000

Routes(app)

ezServe(app, PORT)
