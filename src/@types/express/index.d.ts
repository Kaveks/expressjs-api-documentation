import { User } from '../user/userType';

export {}; // This ensures this file is treated as a module

// Extend the Express Request interface to include a user field
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
