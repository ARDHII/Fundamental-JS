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
