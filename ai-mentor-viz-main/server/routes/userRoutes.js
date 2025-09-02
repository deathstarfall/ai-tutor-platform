import express from 'express';
const router = express.Router();

// 1. Import both functions from the controller
import { registerUser, loginUser } from '../controllers/userController.js';

// 2. Define the route for registration
router.post('/register', registerUser);

// 3. Define the route for login
router.post('/login', loginUser);

export default router;