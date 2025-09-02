import express from 'express';
import cors from 'cors'; // 1. Import cors
import userRoutes from './routes/userRoutes.js';

const app = express();
const port = 3001;

app.use(cors()); // 2. Use the cors middleware
app.use(express.json());

app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});