// Step 1
let students = [
    {
        'name': 'John',
        'age': 20,
        'grade': 70
    },
    {
        'name': 'Cristine',
        'age': 26,
        'grade': 90
    },
    {
        'name': 'John',
        'age': 25,
        'grade': 83
    }
];
// Step 2
console.log(students[1]);
// Step 3
students.push({'name':'Rick', 'age':30, 'grade':89});
// Step 4
students.forEach(function(student){
    console.log(student.name, student.grade);
});
// Step 5
let book = {
    'title':'Meditations',
    'author':'Marcus Aurelius',
    'year': 161,
    getSummary: function(){
        return (`The book is titled ${this.title} by ${this.author} at the year ${this.year}`); // step 8
    }
};
// Step 6
console.log(book.title);
// Step 7
book['year'] = 1930;
console.log(book.year)
// Step 9
console.log(book.getSummary())
// Step 10
let library = [];
library.push(book);
// Step 11
console.log(library);
// Step 12
let car = {
    'brand':'toyota',
    'model':'avalon',
    'year':1994,

    startEngine: function(){
        console.log('The car engine has started!');  // Step 15
    }
};
// Step 13
console.log(car['model']);
// Step 14
car['year'] = 2023;

// Step 16
car.startEngine();
// Step 17
let garage = [];
garage.push(car);
// Step 18
console.log(garage);
// Step 19
let person = {
    'name': 'Jose',
    'age': 27,
    'city': 'Manila'
};
// Step 20
console.log(person['age']);