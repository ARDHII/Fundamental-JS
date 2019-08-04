/////////////////////////
// Function Statement // 
////////////////////////


function greet(){
  console.log(`Hello alven` )
}

function alert(){
  console.log('Error')
}

// Greetings buat user baru masuk
greet()

// Ketika user melakukan kesalahan
alert()


/////////////////////////
// Function Expression//
///////////////////////

const growl = function () {
  console.log('Roar')
}

growl()


greet('alven')


const eat = function (foodName) {
    console.log(`I am eating ${foodName}`)
}

eat('steak')

const getSpecialNumber = function () {
  return 888
}

const number = getSpecialNumber()
console.log(number)
console.log(number + 20)
console.log(Math.pow(number, 2))


// cara 1
function print(){
  console.log('You have been here for 3 seconds')
}

setTimeout (print, 3000)



const interval = setInterval(function(){
  console.log('1 second have passed')
}, 1000)

function stop(){
  clearInterval(interval)
}
setTimeout(stop, 3100)