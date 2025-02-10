import express, { Request, Response, NextFunction } from 'express';
import basicAuth from 'basic-auth';
import { User } from '../@types/user/userType';

const users: { [key: string]: User } = {
  testuser: {
    email: 'testuser@example.com',
    username: 'testuser',
    fullname: 'Kaveke Patrick',
    avatar: 'https://via.placeholder.com/150',
  },
};

export const basicAuthMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const user = basicAuth(req);

  if (!user || typeof user.name !== 'string' || typeof user.pass !== 'string') {
    res.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required"');
    res.status(401).send('Authentication required.');
    return;
  }

  const foundUser = users[user.name]; // Lookup by username
  if (!foundUser) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required"');
    res.status(401).send('Invalid username.');
    return;
  }

  // Check if password matches
  if (user.pass !== 'password123') {
    res.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required"');
    res.status(401).send('Invalid password.');
    return;
  }

  req.user = foundUser;
  //console.log({ foundUser });

  next();
};
