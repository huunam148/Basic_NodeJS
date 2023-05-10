// const express = require('express')
import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();
import initWebRoute from './route/web';

const app = express();
const port = process.env.PORT;
console.log("check port" , port)

configViewEngine(app);
initWebRoute(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})