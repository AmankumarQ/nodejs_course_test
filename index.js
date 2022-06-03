const express = require('express');
const app = express();
require('dotenv').config();
const messageService = require('./service/message');
const port = process.env.PORT || 8080

app.get('/',(req,res)=>{
  res.status(200).json({
      success: true,
      message : messageService.getUserMessage('GET')
  })
})
app.post('/',(req,res)=>{
    res.status(200).json({
        success: true,
        message : messageService.getUserMessage('POST')
    })
  })

app.listen(port,()=>{
    console.log("Server has started",port);
})
