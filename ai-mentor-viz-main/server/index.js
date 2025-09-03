import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3001;

// Path to your client folder
const clientPath = path.join(
  "C:",
  "Users",
  "ADITYAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
  "Desktop",
  "ai-tutor-platform",
  "ai-mentor-viz-main",
  "client"
);

// 1. Serve static files (CSS, JS, images) from client folder
app.use(express.static(clientPath));

// 2. Serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

// 3. Start the server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
