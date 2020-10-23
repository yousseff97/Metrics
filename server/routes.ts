import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router';
import metricsRouter from './api/controllers/metrics/router'
export default function routes(app: Application): void {
  app.use('/api/v1/metrics', metricsRouter);
  app.use('/api/v1/examples', examplesRouter);
}
