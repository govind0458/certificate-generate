import express from 'express';
import 'dotenv/config'
import { Configure } from './src/config/Configuredb.js';
import userRouter from './src/routes/router.js';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json());
app.use(userRouter);
Configure();

app.listen(process.env.PORT, ()=>{
    console.log(`server in running at ${process.env.PORT}`);
})