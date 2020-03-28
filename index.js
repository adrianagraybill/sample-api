'use strict';
const express = require('express');
const app = express();
const PORT = 3000;

function ourFirstGet(req, res){
  res.send('hello world')
}

function randomNumber(req, res) {
  const {min, max, numberOfRandos} = req.params
  let numbers = [];
  for(let i=0; i<numberOfRandos; i++){
    let rando = Math.floor((Math.random() * max+1) +min);
    numbers.push(`${rando}`)
  }
  res.send(numbers.join('\r\n'))
}

app.get('/', ourFirstGet)
app.get('/randomnumber/:min/:max/:numberOfRandos', randomNumber)

app.listen(PORT, () => console.log('simple node server is up and running'))


