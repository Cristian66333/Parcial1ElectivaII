const express = require('express')

const path = require('path')


const app = express()

app.use(express.static('public'))


//settings

app.set('PORT',process.env.PORT||3000)

app.listen(app.get('PORT'), ()=>console.log(`Server listen ${app.get('PORT')}`))
console.log(__dirname)

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'/view/index.html'))
    
})

