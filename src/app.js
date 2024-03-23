'use strict';

import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { registerUser, errorHandler } from 'lib-common-service';

// Email Routes

const app = express();

// Setting up Middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN, // reflecting the request origin
    credentials: true
}));

app.use(express.json({
    limit: '64kb' // Maximum request body size.
}));

app.use(express.urlencoded({
    limit: '32kb',
    extended: false
}));

app.use(rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes max
    max: 50 // Limit each IP to 50 requests per windowMs
}));

// Email Routes

// Error Handler middleware
app.use(errorHandler);

export default app;
