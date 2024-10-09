// Arrow Functions

// function add(a, b){
//     return a + b;
//     // console.log(a + b);
// }

// const add = (a, b) => {
//     return a + b;
// }

// const greet = (name) => {
//     // Log a greeting message
//     console.log(`Hello, ${name}!`);
// };

// Implicit Return
// const add = (a, b) => a + b;
// console.log(add(5,7));

// Arrow function with an arraw map
// const numbers = [1,2,3,4,5];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(numbers.map(num => num));
// console.log(squaredNumbers);

// Implicit return in arrow functions
// const isEven = (num) => num % 2 === 0;
// console.log(isEven(4));

// Transforming a function expression to an arrow function
// function square(num){
//     return num * num;
// }
// console.log(square(3));
// function cube(num){
//     return num * num * num;
// }
// console.log(cube(3));

// Transformed to an arrow function
// const squareArrow = (num) => num * num;
// console.log(squareArrow(3));

// Template literals
// const name = `Alice`;
// const age = 25;
// console.log(`My name is ${name} and I am ${age} years old.`);

// Destructuring arrays
// const arrayNumbers = [1, 2, 3, 4, 5];
// const [first, second, ...rest] = arrayNumbers;
// console.log(first, second, rest);

// Destructuring objects
// const person = {name: 'Bob', age: 30, country:'USA'};
// const {name: personName, age: personAge} = person;
// console.log(personName, personAge);

// Spread and rest operators
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// Rest operator in function arguments
const sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum(1, 2, 3, 4, 5));

// Enhanced object literals
const firstName = 'Jane';
const lastName = 'Doe';
const personInfo = {
    firstName,
    lastName,
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(personInfo.fullName());

// Default parameters
const calculateArea = (length = 1, width = 1) => {
    return length * width;
};
console.log(calculateArea());
console.log(calculateArea(3, 4));

// Default parameters with template literals
const printMessage = (message = 'Hello, World!') => {
    console.log(message);
};
printMessage();
printMessage('Welcome!');

// Destructuring with default values
const settings = {
    theme: 'light',
    fontSize: 14,
    showNotifications: true,
}
const {theme, fontSize, showNotifications = false} = settings;
console.log(theme, fontSize, showNotifications);

// Spread operator with objects
const user = {
    name: 'John',
    age: 30
};

const updateUser = {
    ...user,
    location: 'USA'
};
console.log(updateUser);