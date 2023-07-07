const movies = require('./marvel.json')




const moviesMap = new Map(Object.entries(movies))
const moviesArray = new Array()

for ( [k,v] of moviesMap) {
  //console.log(`${k} ${v}`)

  const valuesMap = new Map(Object.entries(v))
  let test = Array.from(valuesMap)
  //console.log(test[1])
  moviesArray.push([k,test])

}
//console.log(moviesArray[0][1][0][1])

module.exports.moviesArray = moviesArray