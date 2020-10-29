import { Request, Response } from 'express';
export class Controller {
  getMetrics(req: Request, res: Response) {
     res.status(200).json({"ramUsage":process.memoryUsage()});
  }
}
export default new Controller();