import { Request } from 'express'

class SuperManager {
  body: any
  query: any
  params: any

  constructor(_req: Request) {
    this.body = _req.body
    this.query = _req.query
    this.params = _req.params
  }
}

export default SuperManager
