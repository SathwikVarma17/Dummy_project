const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config()
const mongoose = require('mongoose')
const mongodburi =process.env.MongoDB_URL
// Get request
app.get('/ping',(req,res)=>{
  res.json({message:'pong'});
});
//connecting to MongoDB
mongoose.connect(mongodburi)

//Define a route to check the mongoDb connection status 
app.get('/mongoDbconnection',(req,res)=>{
  if (mongoose.connection.readyState === 1){
    res.status(200).json('MongoDb connection is Succesful')
    }else{
      res.status(400).json('Error connection to mongodb')
  }
})



if (require.main === module) {
  app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port}`);
  });
}

module.exports = app;