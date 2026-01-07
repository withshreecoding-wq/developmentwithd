import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory
// This is the correct way to serve a built React application.
// We do NOT serve 'public' or 'src' directly because browsers cannot execute .jsx files.
app.use('/developmentwithd/', express.static(path.join(__dirname, 'dist')));

// Also serve from root if needed, but the base path is /developmentwithd/
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
