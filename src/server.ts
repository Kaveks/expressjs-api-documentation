import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import signUp from './api/auth/signUp';
import users from './api/users/get_user';
import { setupSwaggerWithoutAuth } from './swagger/swagger-without-auth';
import { setupSwaggerWithAuth } from './swagger/swagger-with-auth';

import home from '../src/app/home';
import signIn from './api/auth/signIn';
import { basicAuthMiddleware } from './middlewares/basicAuth';

dotenv.config();
const app = express();

app.use(
  cors({
    origin: ['http://localhost:5000', 'https://yourfrontend.com'],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

// Register routes
app.use('/api/auth/', signIn);
app.use('/api/auth/', signUp);
app.use('/api/auth', users);
app.use('/', home);
app.use(basicAuthMiddleware); // Apply to all routes

// Setup Swagger documentation
//setupSwaggerWithoutAuth(app);
setupSwaggerWithAuth(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📜 Swagger UI: http://localhost:${PORT}/swagger`);
  console.log(`📘 ReDoc: http://localhost:${PORT}/redoc`);
  console.log(
    `🔗 GitHub: https://github.com/Kaveks/expressjs-api-documentation`,
  );
});
