import express, {Express} from 'express';
import mongoose from "mongoose";
import financialRecordRouter from './routes/financial-records'
import cors from 'cors';
const dotenv =require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app: Express=express();
const port= process.env.PORT || 3000;

app.use(cors())
app.use(express.json())


const mongoURI:string = process.env.MONGO_URI!;
mongoose.connect(mongoURI).then(() => console.log("Connected to MongoDB")).catch((err) => console.error("Failed to connect"));

app.use('/financial-records',financialRecordRouter);

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
});