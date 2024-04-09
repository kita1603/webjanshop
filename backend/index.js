//packages
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//Utiles
import connectDB from "./config/db.js";
import userRoutes from "./routes/useRoutes.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//call this api for create user example: http://localhost:5000/api/users
app.use("/api/users", userRoutes);

app.listen(port, () => console.log("Server running on port: " + port));