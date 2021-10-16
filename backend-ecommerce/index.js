import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';

//components import
import Connection from './database/db.js'
import DefaultData from './default.js';
import Routes from './routers/router.js'
import { USERNAME,PASSWORD } from "./secret.js";

const app =express();

const PORT =8000;


Connection(USERNAME,PASSWORD);


app.listen(PORT,()=> console.log(`server is successfully running on port ${PORT}`))

 DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);