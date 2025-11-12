const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb+srv://abdelrhmanaiiad_db_user:<Password>@cluster0.6ogkr2l.mongodb.net/?appName=Cluster0"
const app = express();
const courseRouter = require('./routes/courses.router');
app.use(express.json());

mongoose.connect(url).then(()=>{
    console.log('mongoose connected');
});

app.use('/api/courses',courseRouter);

app.listen(5000, () => {
    console.log('app running on port 5000');
});
