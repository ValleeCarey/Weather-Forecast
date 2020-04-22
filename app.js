//kelvin equals forecast for today
const kelvin = 293
//celsius is 273 less than kelvin 
const celsius = kelvin - 273 
//calculate fahrenheit 
let fahrenheit = celsius * (9/5) + 32
//round down decimal number of fahrenheit
fahrenheit = Math.floor(fahrenheit);
// calculate newton 
let newton = celsius * (33/100)
//round down decimal 
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

console.log(`The temperature is ${newton} degrees Newton.`)
