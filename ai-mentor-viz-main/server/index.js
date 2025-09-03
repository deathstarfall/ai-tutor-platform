import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

// 1. Define the dynamic path to the client's build folder
const clientPath = path.join(__dirname, '..', 'client');

// 2. Serve all static files from the client folder
// This will automatically serve index.html for the '/' route
app.use(express.static(clientPath));

// 3. Start the server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});