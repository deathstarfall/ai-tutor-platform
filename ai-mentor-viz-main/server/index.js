import express from 'express';
import userRoutes from './routes/userRoutes.js'; // 1. Import your routes

const app = express();
const port = 3001;

// 2. Middleware to allow the server to read JSON from requests
app.use(express.json());

// 3. Tell the server to use your route file for any path
//    that starts with '/api/users'
app.use('/api/users', userRoutes);

// 4. Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});