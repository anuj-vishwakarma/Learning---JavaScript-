let a;
a = "JavaScript";
a = 3;
// see variables created using let keyword are mutable
console.log(a);

const b = 2003;
// b = 2005; Can't be assigned because variable created using const keyword are immutable 
console.log(b);

// name = "Anuj"; ALlowed but should not be used.

let age1 = 3;
let age2 = 4;

console.log(age1, age2);
console.log(typeof age1);
age1 /= 3;
console.log(age1)

let x = 3;
let y = 5;

// bool greater  false;
var z = x > y;
console.log(z);

// concatenation of string 

let firstName = 'Anuj';
let lastName = "Vishwakarma";
const fullName = `I'm ${firstName} ${lastName}`;
console.log(`My name is ${firstName} ${lastName}`);
console.log(fullName);

console.log('I study \n\
in GGV Bilaspur, \n\
Koni, Chhattisgarh')

// using `` we can just hit enter and a new line will be added autamaticaly, we'll use this while creating html using javascript to load the content dynamically 

console.log(`I am
a Student`)

const inputYear = '1991';

console.log("Coercion");

console.log(inputYear + 10); // added string to number(it will be added as string), we need to do type conversion,
console.log(Number(inputYear) + 10);
// Now the output will be 2001
console.log(Number('Anuj'));// since 'Anuj' is string, it can't convert to number, thus the output would be NaN(Not a Number i.e. Invalid Number)

console.log(typeof NaN); // output is number, thus it proves that NaN is just called as Not A Number, but in reality it is an Invalid number

console.log(String(3)); // output is white, thus it's a String value.


// Coercion, i.e. Automatic Type Conversion(implicitly by JS)
console.log('I am ' + 20 + ' years old');

console.log('33' - 10 - '3'); // the output is 20, coercion property used by JavaScript, - operator triggers the opposite conversion, if we've used + you already know what we've gotten. 
console.log('33' + 10 - 3); // output is 3307 (first 33 and 10 are added as string, resulting 3310 and subtraction by 3 gives 3307)

let n = '1' + 1; // n = 11(String)
n = n - 1; // n = 10(because - operator triggers the opposite conversion, so n will be treated as integer)
console.log(n);// output is 10



// There are 5 falsy values
// 0, '', undefined, null, NaN
// if they are used in a boolean vairable then the value will become false automatically 

let bool = '';
if (bool)
    console.log(3); // no output because if condition fails, since bool is fals

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({})); // {} empty object 

// These truthy and falsy are used to check if a variable is defined or not more specifically to check if it is initialized or it has any value in it, it makes sense because an intialized variable will have value undefined which in boolean is false

let variable;

if (variable)
    console.log("Variable is initialized");
else
    console.log("Variable is not initialized");


// ==  vs  ===

/*
See, both are equality operators used to check if two values are equal or not, they return true if the equality holds and false if does not 
*/

// === Strict Equality Operator
// ==  Loose Equality Operator
console.log(18 == '18') // returns true! but strict equality operator would have returned false!
/*
    === is called strict equality operator, which compares the equality of two values and doesn't allows (type coercion) if two values are even equal but they're having different data types then the strict equality operator returns false
    
    e.g. 
    18 === 18 returns true
    but '18' === 18 returns false, since we're comparing two values which are same but the strict equality operator isn't allowing the type coercion, thus we're getting false as output
    
    meanwhile if we've used loose equality operator we would have got true as an output

    e.g. 

    '18' == 18  returns true

    So, using loose equality opearators can introduce many hard to find bugs, so in general while comparing two values we should use
     "strict equality opeartor" as mush as we can.  

     So, always manually convert the values before comparing them using === opeartor, which is fat better than relying on loose equality opearor



     Similar to this we also have, !== and !=, Strict inequality and loose inequality respectively
 */


// prompt in JavaScript

/*
    We can use prompt funtion in JS, to prompt the user to take "String" as input.
    e.g. 
*/

// const favNo = prompt("what's your faviorite number:?");
// console.log(favNo);
// console.log(typeof favNo);// using prompt functino to take input from user takes input as String, thus it will return true;


/*

Logical Operators
&& Logical AND,
|| Logical OR

*/


/* 
    Switch Case in JS
*/

const day = 'monday';

switch (day) {
    case 'monday':
        console.log("Plan course Structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Preparing theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Code example");
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day");
}

// Statements and Expressions
/* Expressions produce values and statements are like full sentences    that are set of instructions
*/

3 + 4 // it is an expression

true && false && !true || false // it is an expression 

const str = '23 is bigger';// it is an statement (is )

let age = 18;
let drink1;
if (age >= 18)
    drink1 = 'wine';
else
    drink1 = 'water';

/*
console.log(`I like to drink ${drink1}`);
console.log('I like to drink {
    if (age >= 18)
    drink1 = 'wine';
else
    drink1 = 'water';
}'')
it is wrong we can't insert a statement there we can only insert an expression, since an expression returns some value, thus


console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)


/*
    The very first version of javascript was created by Brendan Eich in just 10 days, and it was initially called as **Mocha** 
    Then the name of Mocha was changed to **LiveScript** and then to JavaScript to attract Java developers, 

    **JavaScript has nothing to do with Java**

    In order to standardize the javascript language, so the language is submitted to an independent standard organization named Ecma, which in 1991 released ECMAScript1 i.e. ES1, it was the first official version of JavaScript 

    ECMAScript is a **standard** and JavaScript is the **language in practice.**
     
    ES6 was released in June 2015, which is also called ES2015 because from 2015 onwards ECMA announced to release a new version annually (earlier they used to release ton of features at once in couple of years, from 2015 onwards they release every year with few feautures added to it)

    From ES2015,onwards the naming convention of release also changed now, it is called ES<year> instead of ES1,ES2, etc
    
    JavaScript support backward compatibility upto ES1, so if you pick up a web page (very old) and try to run on moder browsers, it will run flawlessly because in JS new version nothing is removed rather something gets added which is because to not **Break The We**

    ES6+ is what we call it Modern JavaScript 

*/



