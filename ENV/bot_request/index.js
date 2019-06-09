import Express from 'express'
import axios from 'axios';
require('dotenv').config()

const app = Express()

app.get("/", (req, res) => {
  res.send({'code':200,message:"Bot Request"});
});

setInterval( () => {
  let i = 0
  while (i < 2500) {
    //request_python()
    request_node()
    i++;
  }
},(Math.floor(Math.random() * 3) + 5)*1000) //s


function request_python() {
  let url = process.env.API_PYTHON
  const options = {
      method: 'GET',
      headers: { 'Authorization': `Basic ${process.env.URL_API_TAC_AUTH}`, 'content-type': 'application/json' },
      //data: param,
      url,
  };
  return axios(options).then(function (response) {
    console.log(response.data);
      return response
  })
  .catch(function (error) {
      console.log(error.message);
      return {'code':0,'message':'Error api add_job (tac) '+error}
  })
}

function request_node() {
  let url = process.env.API_NODE
  const options = {
      method: 'GET',
      headers: { 'Authorization': `Basic ${process.env.URL_API_TAC_AUTH}`, 'content-type': 'application/json' },
      //data: param,
      url,
  };
  return axios(options).then(function (response) {
    console.log(response.data);
      return response
  })
  .catch(function (error) {
      console.log(error.message);
      return {'code':0,'message':'Error api add_job (tac) '+error}
  })
}

app.listen(process.env.PORT,()=>{
    console.log("Server running on : ",process.env.PORT)
});