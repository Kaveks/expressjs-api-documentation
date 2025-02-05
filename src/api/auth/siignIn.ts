import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Simulated "database"
const users: { [key: string]: any } = {};

const router = express.Router();

/**
 * @swagger
 * /signIn:
 *   post:
 *     summary: Login a user
 *     description: This API allows a user to log in by providing an email and password.
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
 *         description: Successfully logged in and received a token
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */

router.post("/signIn", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const user = users[email];

    // Check if user exists and password matches
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // Generate JWT token
    const token = jwt.sign({ email: user.email }, "secret", {
      expiresIn: "1h",
    });

    // Respond with the token and user details
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
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
