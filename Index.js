const express = require('express')
const path = require('path')
const fs = require('fs');
var FindFiles = require("node-find-files").default;

const app = express()
const port = 3000
let kjk=1

const testFolder = './tests/';

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Image', (req, res) => {
    let Image_path= path.join(__dirname,'Kirito.jpg');
    res.sendFile(Image_path)
  })


  app.get('/dynamicImage', (req, res) => {
    //let Image_path= path.join(__dirname,'Kirito.jpg');
    //res.sendFile(Image_path)
    let a = req.query.name
    
    



    if (a == 'Kirito') {
        let Image_path= path.join(__dirname,'Kirito.jpg');
         res.sendFile(Image_path)
        }
         else if (a == 'attack') {
            let Image_path= path.join(__dirname,'attackontitan.jpg');
            res.sendFile(Image_path)
          } else {
            res.send('Image Not Found');
          }
          
          
         
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})