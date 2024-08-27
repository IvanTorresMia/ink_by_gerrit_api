import dotenv from 'dotenv';
dotenv.config(); // Load environment variables before anything else

import express from 'express';
import instagramRouter from './routes/instagram';
import cors from 'cors';
import { corsOptions } from '../config/cors-options';

const app = express();
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3017;

app.use('/api/instagram', instagramRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});