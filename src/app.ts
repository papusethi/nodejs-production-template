import express from 'express';
import path from 'path';
import globalErrorHandler from './middleware/globalErrorHandler';
import router from './router/apiRouter';
import httpError from './utils/httpError';
import responseMessage from './constant/responseMessage';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/v1', router);

// 404 Handler
app.use((req, _res, next) => {
  try {
    throw new Error(responseMessage.NOT_FOUND('Route'));
  } catch (err) {
    httpError(next, err, req, 404);
  }
});

// Global error handler
app.use(globalErrorHandler);

export default app;
