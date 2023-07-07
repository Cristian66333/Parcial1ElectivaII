const express = require('express')
const path = require('path')

const { moviesArray } = require('../resources/movies.js')
//console.log(moviesArray[0][1][0])
let moviesFinal = new Array();
for (const value of moviesArray[0][1]){
    moviesFinal.push(value[1])
}

//console.log(moviesFinal)

const router = express.Router()

//routes

router.get('/', (req,res)=>res.render(path.join('index'),{'title':'Gestión peliculas Marvel Universe','data':moviesFinal}))
router.get('/newDish',(req,res)=>res.render('insDish',{'title':'Insertar registro'}))
router.post('/remove',(req,res)=>{
    let { id }=req.body
    moviesFinal= moviesFinal.filter(n=>n.movie_id!=id)
    res.redirect('/')
    
})

router.post('/',(req,res)=>{
    console.log(req.body)
    const {text, year, fechaInicio, fechaFin } = req.body
    
    
    console.log(text+year+fechaInicio+fechaFin)
})



module.exports = router
