const newLocal = 'use strict';
/* This (** 'use strict' **) allows the javascript code more secure, that means with using strict mode makes it easier for us devlopers to avoid accidental errors this is because of two reasons: 

**First** Script mode forbids us to do certain things and **Second** it will create visible errors in situations in which normal javascript without strict mode will fail silently without letting us know that we did a mistake for example see below:*/

let hasDriversLicense = false;
const passTest = true;



if (passTest)
    hasDriverLicense = true;
// see, here' we've made a mistake intentionally which is in the spelling of hasDriversLicense variable now, (it can happen we were trying to initialize the hasDriversLicense variable and we've mistyped the variable name and were in hurry didn't noticed it and thought that the variable has been initialized but it wasn't so, without using the strict mode, we will not get any error and the message below *I can drive :D* will not get printed(since it hasn't initialized with true!), but if we've used strict mode, then we'll get an error in console which is 

//*script.js:10 Uncaught ReferenceError: hasDriverLicense is not defined
// at script.js:10:22

if (hasDriversLicense)
    console.log("I can drive :D");

// next example
// while using some reserved words as variable name strict mode gives error that you can't use that name, but without strict mode, the error will not be seen on console.
// e.g. 
// let interface = 'A';// interface is reserved keyword by javascript 

function functionName(/* the variables names here are written without specifying data types e.g. let, var, const */) {
    // body
    console.log("hello");
}
functionName();// function calling, invoking, running

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(4, 0);
// console.log(appleJuice);


// function call before even declaration of function.(it's allowed but not preferred to use until necessary!);

const age3 = calcAge1(2000);
// Function: 
function calcAge1(birthyear) {
    return 2024 - birthyear;
}
// function call, after declaration 
const age1 = calcAge1(2004);


console.log(age1);

// Function Expression, or Anonymous Function
const calcAge2 = function (birthyear) {
    return 2024 - birthyear;
}
console.log(calcAge2(2004));


/* Difference  between function and function expression is that function can be called before or after declaration, but in function expression function can't be called before declaration */

/* Arrow Function : 
Arrow function is a special form of function expression, syntax:

        parameterName => (what you wanna return goes here, if more than one line of body you can use parenthesis also, but in that case you need to use return keyword, becasue the implicit return only happens for one line of body);
    


*/
const calcAge3 = birthYear => 2024 - birthYear;
const age4 = calcAge3(2000);
console.log(age4);
console.log(calcAge3);

// arrow function with multiple lines of code after the arrow
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntilRetirement(2000, 'Ramesh'));
console.log(yearsUntilRetirement(2006, 'Gaurav'));

// Arrow function do not get the this keyword to use, i.e. we can't use **this** keyword when used an arrow function 



const cutPieces = function (fruit) {
    return fruit * 4;
}
const fruitProcessor = function (apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges.`;

    return juice;
}

console.log(fruitProcessor(4, 5));

// Arrays in JavaScript 

// 1st way of declaring the array 
const friends = ['Peter', 45, 93, 'Jonas', 'Anuj', 4, 5];
console.log(friends);

// 2nd way of declaring an array in JS

const years = new Array(1991, 1992, 2003);
console.log(years);

console.log(years.length);

console.log(years + 10);// this will add 10 as string to last element of the arraay but if we do years-10 we'll get NaN

console.log(years - 10);// output would be NaN

// **push** function adds the element to last of the array and it also returns a value which is the updated length of array after adding the element to the last 

const l = years.push(2001);
console.log(years, `The updated length of years array is ${l}`);

// there is a method named **unshift** to add the element at the front of the array and this indeed returns the new length of array

const f = years.unshift(2000);
console.log(years, `The updated length of years array is ${f}`);

// Removes last element 
// pop returns the element which is removed 
const popped = years.pop();
console.log(years, `Popped element is ${popped}`);


//The shift method removes first element and also returns the length of array back 

const firstElement = years.shift();
console.log(years, `Removed first element is ${firstElement}`);

// indexOf(element) returns the index of element
// and if the element ain't present in the array in that case we'll get -1 as output of indexOf(element) method

// includes(element) returns true if element is present in the array and vice-versa (includes is an ES6 method)

// Array Coding Challenge 

const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];




// Objects in JavaScript 
// anuj is an object 
const anuj = {
    firstName: 'Anuj',
    //  propertyKey:propertyValue,
    // propertyKey = firstName, propertyValue=Anuj
    // properyKey can also be called as propertyName

    lastName: 'Vishwakarma',
    age: 2024 - 2003,
    job: 'Student',
    friends: ['Ashutosh', 'Vishal', 'Ayush', 'Verma']
};
console.log(anuj);

console.log(anuj.firstName);
console.log(anuj.lastName);


// To add new properties of object anuj
anuj.location = 'Vietnam';
anuj.insta = 'mr_anuj_the_next_1';

// See, the dot operator is used to get the data if we know the key names, then we can directly access the data stored by that object using the dot operator and the key/propertyKey but if we want to get the propertyKey/propertyName  from some function or anything the in that case we use **square brackets** []
// e.g. 

const nameKey = 'Name';
console.log(anuj['first' + nameKey]); // so here we're passing an expression which will calculate the propertyKey/propertyName, so we've used [] insted of (.) dot operator
console.log(anuj['last' + nameKey]);
// console.log(anuj.(['last' + nameKey]))
// this won't work we've to use [] instead of dot


// const interestedIn = prompt("Interested in ?");
// console.log("Here it is!");
// console.log(anuj.interestedIn); // won't work and show undefined, becuase interestedIn isn't a property name thus we have to use []

// console.log(anuj[interestedIn]);

console.log(anuj.location);
console.log(anuj.insta);

// Challenge
// Log this to console using propertynames
// "Anuj has 4 friends, and his best friend is Vishal"

console.log(`${anuj.firstName} has ${anuj.friends.length} friends, and his best friend is ${anuj.friends[1]}.`)

// . is called **Member Access** and [] is called **Computed Member Access** and they have very high priority
// . > [] 

// creating function inside objects: 



const data = {
    firstName: 'Anuj',
    //  propertyKey:propertyValue,
    // propertyKey = firstName, propertyValue=Anuj
    // properyKey can also be called as propertyName
    birthYear: 2003,
    lastName: 'Vishwakarma',
    age: 2024 - 2000,
    job: 'Student',
    friends: ['Ashutosh', 'Vishal', 'Ayush', 'Verma'],
    hasDriversLicense: false,
    // calcAge: function (birthYear) {
    //     return 2024 - birthYear;
    // }

    // this one is more good way to do this, since this avoids the case of passing wrong birthyear as parameter, as in the above method calcAge(birthYear);
    // calcAge: function () {
    //     console.log(this); // this is the whole data(object)// this is the one calling the method
    //     // so below this.birhYear, this points to the current object i.e. data here, so its equivalent of writing data.birhtYear
    //     return 2024 - this.birthYear;
    // },
    calcAge: function () {
        // console.log(this);
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `This is a data object of ${this.firstName} ${this.lastName} who was born in ${this.birthYear} and is a ${this.job} and having friends ${this.friends} and his age is currently ${this.calcAge()} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

// Now we can call calcAge method multiple times, but it ain't so much good to way to do, because we're callng each time the calcAge method and doing computations, so its better to do computation once and save the result for later usage!!
console.log(data.calcAge());
console.log(data.calcAge());
console.log(data.calcAge());
console.log(data.calcAge());

// WE've used the calcAge function once and now, we're using the saved data in age property/key 
console.log(data.age);
console.log(data.age);
console.log(data.age);


// we've made the function as it takes birth year as input, but imaging if it get's changed by accident then it won't be so good and we'll have to try finding where the problem is, 

// So its better to not pass the birthYear as parameter/argument 
console.log(data['calcAge'](2000));


console.log(data.getSummary());



/* Write your code below. Good luck! 🙂 */

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    bmi: 0,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: 'john Smith',
    mass: 92,
    height: 1.95,
    bmi: 0,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

// (mark.calcBMI() > mark.calcBMI()) ? console.log(`John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`) : console.log(`Mark Miller's BMI (${mark.bmi}) is higher than Mark Miller's (${john.bmi})!`);
const bmiMark = mark.calcBMI();
const bmiJohn = john.calcBMI();
console.log(`${(bmiMark > bmiJohn) ? `Mark Miller's BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!` : `John Smith's BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`}`);


// for loops 

for (let i = 1; i <= 5; i++) {
    console.log(`I can do it ${i} times, MF!`)
}
// Applying for loops on Arrays
const types = [];

for (let i = 0; i < friends.length; i++) {

    console.log(`(${i}) ${friends[i]}`);
    // types[i] = typeof friends[i];
    // OR
    types.push(typeof friends[i]);
}
console.log(types)



const type = [];
// Only string are allowed, using **continue** to do so
for (let i = 0; i < friends.length; i++) {
    if (typeof friends[i] !== 'string') continue;
    type.push(typeof friends[i]);// replacing the elements
}
console.log(type);


for (let i = 0; i < friends.length; i++) {
    if (typeof friends[i] == 'number') break;
    console.log(friends[i], typeof friends[i]);
}

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice != 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice == 6)
        console.log(`Loops is about to end.....`);
}

console.log("hei")



