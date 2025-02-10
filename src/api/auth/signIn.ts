import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

const user: {
  email: string;
  password: string;
  username: string;
  fullname: string;
  avatar: string;
} = {
  email: 'user@example.com',
  password: '', // Will be set asynchronously
  username: 'testuser',
  fullname: 'Test User',
  avatar: 'https://via.placeholder.com/150',
};

// Hash the password asynchronously before starting the server
(async () => {
  user.password = await bcrypt.hash('password123', 10);
})();

/**
 * @swagger
 * /api/auth/signIn:
 *   post:
 *     summary: Login a user
 *     description: Allows users to log in and receive a JWT token.
 *     tags:
 *       - Auth  # Reference to the existing Auth tag
 *     requestBody:
 *       description: User credentials for login
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         headers:
 *           Authorization:
 *             schema:
 *               type: string
 *             description: JWT token for authentication
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT authentication token
 *                 user:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                     username:
 *                       type: string
 *                     fullname:
 *                       type: string
 *                     avatar:
 *                       type: string
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
router.post('/signIn', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    if (
      email !== user.email ||
      !(await bcrypt.compare(password, user.password))
    ) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, 'secret', {
      expiresIn: '1h',
    });

    // Set Authorization header
    res.setHeader('Authorization', `Bearer ${token}`);

    res.json({
      token,
      user: {
        email: user.email,
        username: user.username,
        fullname: user.fullname,
        avatar: user.avatar,
      },
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
