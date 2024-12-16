import { Express } from 'express'
import cors from 'cors'

const corsConfig = {
  origin: '*',
  'access-control-allow-origin': '*',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

export async function Middleware(app: Express) {
  app.use(cors(corsConfig))
}
