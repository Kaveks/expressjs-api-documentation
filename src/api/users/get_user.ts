import express, { Request, Response } from 'express';

const router = express.Router();
const users: { [key: string]: any } = {};
/**
 * @swagger
 * /api/auth/users:
 *   get:
 *     summary: Get all users
 *     description: Fetch a list of all registered users.
 *     tags:
 *       - Users  # Reference to the existing User tag
 *     responses:
 *       200:
 *         description: Successfully retrieved list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                   email:
 *                     type: string
 *                   username:
 *                     type: string
 *                   fullname:
 *                     type: string
 *                   avatar:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   is_social_account:
 *                     type: boolean
 *                   is_active:
 *                     type: boolean
 *                   is_staff:
 *                     type: boolean
 *                   is_superuser:
 *                     type: boolean
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Internal server error
 */

router.get('/users', (req: Request, res: Response): void => {
  try {
    const allUsers = Object.values(users);
    res.status(200).json(allUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
export default router;
