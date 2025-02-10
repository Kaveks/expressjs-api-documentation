import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// type definition for user object
const users: { [key: string]: any } = {};

/**
 * @swagger
 * /api/auth/signUp:
 *   post:
 *     summary: Register a new user
 *     description: This API allows a user to register by providing details like email, username, and password.
 *     tags:
 *       - Auth  # Reference to the existing Auth tag
 *     requestBody:
 *       description: User details for registration
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
 *               username:
 *                 type: string
 *                 example: "user123"
 *               firstname:
 *                 type: string
 *                 example: "John"
 *               lastname:
 *                 type: string
 *                 example: "Doe"
 *               avatar:
 *                 type: string
 *                 example: "image_url"
 *               phone:
 *                 type: string
 *                 example: "1234567890"
 *               is_social_account:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       201:
 *         description: User registered successfully
 *       500:
 *         description: Internal server error
 */
router.post('/signUp', async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      email,
      password,
      username,
      firstname,
      lastname,
      avatar,
      phone,
      is_social_account,
    } = req.body;

    // Basic validation
    if (!email || !password || !username || !firstname || !lastname) {
      res.status(400).json({ message: 'Missing required fields' });
      return;
    }

    // Check if user already exists
    if (users[email]) {
      res.status(400).json({ message: 'Email already registered' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = uuidv4();
    const fullname = `${firstname} ${lastname}`;

    // Simulate saving the user in the "database"
    users[email] = {
      userId,
      email,
      password: hashedPassword,
      username,
      firstname,
      lastname,
      fullname,
      avatar,
      phone,
      is_social_account,
      is_active: true,
      is_staff: false,
      is_superuser: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
