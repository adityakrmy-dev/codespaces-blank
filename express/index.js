const express = require('express')

express().get('/', (req, res) => {

  res.send('Hello This is AD Pal')




}).listen(3000, () => {
  console.log(`Server Started on port 3000`)
})