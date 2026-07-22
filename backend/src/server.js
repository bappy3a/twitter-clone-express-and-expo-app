import express from 'express';
import { connectDB } from './config/db.js';
import { ENV } from './config/env.js';

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(ENV.PORT, () => {
    console.log(`Server is running on port ${ENV.PORT}`);
});