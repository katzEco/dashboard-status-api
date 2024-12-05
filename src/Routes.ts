import { Express, Request, Response } from 'express'

import { HomePage } from './Pages/Home'
import { StatusPage } from './Pages/Status'

export async function Routes(app: Express) {
  app.get('/', async (req: Request, res: Response) => {
    res.send(await HomePage())
  })

  app.get('/status', async (req: Request, res: Response) => {
    res.send(await StatusPage())
  })
}
