const express = require('express');
const moment = require('moment-timezone');

const app = express()

app.get("/", (req, res) => {
  //const date_now = moment().tz('Asia/Bangkok').format('DD-MM-YYYY HH:mm:ss')
  res.send({'code':200,'message':"Service Node",'time2':moment().format('DD-MM-YYYY HH:mm:ss')});
});

app.listen(process.env.PORT,()=>{
  console.log("Server running on :",process.env.PORT)
});
