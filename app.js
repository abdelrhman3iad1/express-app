import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
import courseRouter from './routes/courses.router.js';
import ApiResponse from './utils/api_response.js';
import cors from 'cors';

dotenv.config();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

mongoose.connect(URL).then(() => {
    console.log('mongoose connected');
});

app.use('/api/courses', courseRouter);


app.use((req, res, next) => {
    return ApiResponse(res, 404, "fail", "Page not found");
});

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});
