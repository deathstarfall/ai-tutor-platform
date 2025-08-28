import express from 'express';
import { registerUser } from '../controllers/userController.js'; // Import the logic

const router = express.Router();

// When a POST request comes to the '/register' path,
// use the registerUser function from the controller.
router.post('/register', registerUser);

export default router;