// Array Operations
// Declaring array

let name = 'Joshua';
console.log(name.length);
// Step 1
let fruits = ['apple', 'banana', 'orange', '____'];
fruits.push('kiwi');
console.log('Fruit array: ', fruits);

// Step 2 Access and display first and last fruit
console.log('First fruit: ', fruits[0]);
console.log('Last fruit: ',fruits[fruits.length - 1]);

// Modifying Arrays
// Step 3
fruits[1] = 'grape';
console.log(fruits);
fruits.pop();
console.log('Modified array: ', fruits);

// Iterating over Arrays
// Step 4
// loop method
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// Step 5
// for each method
fruits.forEach(function(fruit) {
    console.log(fruit);
})

// Array Methods
// Step 6
let numbers = [10, 20, 30, 40, 50];

console.log('Index of 30:', numbers.indexOf(30));
console.log('Includes 40:', numbers.includes(40));

numbers.push(60);
numbers.shift()
console.log('Updated array:', numbers);

// Slicing and Splicing Arrays
// Step 7
let slicedArray = numbers.slice(1, 3);
console.log('Spliced array:', slicedArray);
// Step 8
let removedElements = numbers.splice(1,2);
console.log('Removed elements:', removedElements);
console.log('Updating array:', numbers);