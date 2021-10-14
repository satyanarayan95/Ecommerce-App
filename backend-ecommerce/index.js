import express from "express";
import dotenv from "dotenv"

//components import
import Connection from './database/db.js'
import DefaultData from './default.js';

const app =express();

const PORT =8000;

const user='satyanarayan';
const password="satya5495"

Connection(user,password);


app.listen(PORT,()=> console.log(`server is successfully running on port ${PORT}`))

 DefaultData();