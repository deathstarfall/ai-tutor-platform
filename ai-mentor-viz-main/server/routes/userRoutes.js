// 1. Import Express and the router function
import express from 'express';
const router = express.Router();

// 2. Import the controller functions that contain the logic
import { registerUser, loginUser } from '../controllers/userController.js';

// 3. Define the API routes
// When a POST request is sent to '/register', run the registerUser function
router.post('/register', registerUser);

// When a POST request is sent to '/login', run the loginUser function
router.post('/login', loginUser);

// 4. Export the router so your main index.js file can use it
export default router;