// src/index.ts
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001; // Example port for auth-service

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Auth Service with TypeScript and Express is running!');
});

// Add your authentication routes here, e.g.:
// app.post('/register', (req, res) => { /* ... */ });
// app.post('/login', (req, res) => { /* ... */ });

app.listen(port, () => {
  console.log(`[server]: Auth Service is running at http://localhost:${port}`);
});