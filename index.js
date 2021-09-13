import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();


app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send('APP RUNNING');
});


const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery321@cluster0.nnwj7.mongodb.net/javascriptmastery?retryWrites=true&w=majority' 
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

// https://www.mongodb.com/cloud/atlas
// mongodb+srv://javascriptmastery:<password>@cluster0.nnwj7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// https://github.com/adrianhajdin/project_mern_memories