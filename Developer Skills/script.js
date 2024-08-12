'use strict'
const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // C) FIX 
        // value: Number(prompt('Degree Celsius'))
        value: 12,
    }
    const kelvin = measurement.value + 273;
    // B) FIND 
    console.table(measurement); // shows the object's property and value in the form of table
    return kelvin;
};


// A) IDENTIFY 
console.log(measureKelvin());
// console.warn("hi"); // shows the text with warning (yellow)
// console.error("hi"); // shows the text with error (red)


/* CHALLENGE 1
    Example: [17, 21, 23] will print "... 17 deg C in 1 days ... 21 deg C in 2 days ... 23 deg C in 3 days"

*/
const printForecast = function (temps) {
    // if you did like var str; then the first value would be undefined, because str wouldn't have been initialized!
    var str = '...';
    for (let i = 0; i < temps.length; i++) {
        str += ` ${temps[i]} deg C in ${i + 1} days ...`;
    }
    return str;
}
var temps = [12, 23, 11];
console.log(printForecast(temps));


