//const express=require('express');
import express from 'express' //ES6 IMPORT/EXPORT syntax
import Connection from './database/db.js';
import routes from './routes/route.js';
import cors from 'cors'; //to handle different port in frontend and backend
import bodyParser from 'body-parser';

const app=express();

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/',routes);
const port=process.env.PORT||8000;

Connection();
app.listen(port,()=>{
    console.log(`sever is running at Port ${port}`)
})


