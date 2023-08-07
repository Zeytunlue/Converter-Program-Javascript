// Javascript Converter Program Project

// Kilometer to Mile - Mile to Kilometer Converter
let miles = 24;
let kilometers = 40;
const number = 1.609344;
kilometersToMiles = (kilometers / number);
milesToKilometers = (miles * number);
console.log("Distance conversions");
console.log("-----------------------");
console.log(kilometers + " kilometers are:");
console.log(kilometersToMiles + " miles");
console.log("----");
console.log(miles + " miles are:");
console.log(milesToKilometers + " kilometers");
console.log("\n");

//Celsius to Fahrenheit - Fahrenheit to Celsius Converter
let celsius = 5;
let fahrenheit = 41;
const celsiusToFahrenheit = (celsius * 9 / 5) + 32;
fahrenheitToCelsius = (fahrenheit - 32) * 5 / 9;
console.log("Temperature conversions");
console.log("-----------------------");
console.log(fahrenheit + " degrees Fahrenheit are:");
console.log(fahrenheitToCelsius + " degrees Celsius");
console.log("----");
console.log(celsius + " degrees Celsius are:");
console.log(celsiusToFahrenheit + " degrees Fahrenheit");