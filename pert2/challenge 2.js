const weight = prompt('Input your Weight (Kg)')
const height = prompt('Input your Height (Meter)')
const IMT = weight / Math.pow(height, 2)

if (IMT < 18.5) {
  console.log('Underweight')
  alert('You need to eat more')
}

else if (IMT >= 18.5 && IMT  <= 24.9) {
    console.log('Ideal')
    alert('You are the Ideal type')
}

else if (IMT >= 25 && IMT <= 29.9) {
    console.log('Overweigt')
    alert('A little jog wont hurt you')
}

else if (IMT >= 30 &&  IMT <= 39.9) {
    console.log('Very Overweight')
    alert('run little girl, RUN')
}

else {
  console.log('Obese')
  alert('you need to work out')
}
  

