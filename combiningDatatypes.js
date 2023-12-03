
//Combine objects, arrays, and functions

// Create an object, called crayonBox, that has a property that is an array. 
// The array should have the names of some crayons. Log one of the elements of that array.

let crayonBox = ["black", "green", "purple"]

console.log(crayonBox[2])

//Create an object bottle that has a property that is an object: cap. cap can have properties like material: 'metal' or 'plastic', color: blue or white etc.
// Log one of the properties of that inner object.

let bottle = {
    "item": "bottle",
    "cap": {
      "material": "metal",
      "color": "blue", 
    }
  }
  
  console.log(bottle["cap"]["color"])
  


  //Create an array called receipt that has at least one object in it. 
//   The inner objects should be items that have a name and a price. 
//   Log one of the properties of that inner object.

let receipt = [
    {
      name: "kicks",
      price: 100
    },
    {
      name: "wheels",
      price: 2500
    },
    {
      name: "drip",
      price: 1000000
    }
  ];
  
  console.log(receipt[2].price); // Output: 100000
  

//Create an array called apartmentBuilding that has an array as one of its elements
// the inner array should be the names of the tenants.
// Log one of the elements of the inner array.

let apartmentBuilding = [
    ["King", "John", "Snow"],
  ];
  
  console.log(apartmentBuilding[0][2]); // Output: Snow

//   Combine objects, arrays, and functions more than one level deep
  
// Create a function knit that returns an object that has 
// the following kinds of properties item: scarf, size : 6ft etc. 
// Log a value of that object

function knit(item, size) {
    let clothes= {
      item: item,
      size: size,
    };
    console.log(clothes.size); // Log the size property
    return clothes;
  }
  
  let shirt = knit("whiteTee", "large"); // Create a shirt object
  console.log(shirt.item); // Log the item property
  
  //Create a function crayonSelector that returns an object that has an array 
  //Log one of the elements of that array.

 let crayonBox2 = ["black", "green", "purple"]

console.log([crayonBox2])

//Create a function powerButton that returns a function called options -
// options should console.log a simple message like select a song. Call that inner function

function powerButton() {
    function options() {
      console.log("We Belong Together");
    }
    return options;
  }
  
  let optionsFunction = powerButton(); // Create a reference to the inner function
  optionsFunction(); // Call the inner function
  

//Model a Vending Machine Model
// a vending machine

class Snack { //The class 'Snack' defines an object named Snack. 
  constructor(name, price) { // declares property of object
    this.name = name;// assigns valueof parameters
    this.price = price;
  }
}

class VendingMachine { //The class 'VendingMaching' defines object 
  constructor(snacks) {
    this.snacks = snacks;
  }

  vend(position) {  // vend method takes a parameter and returns the Snack object at that position in array
    if (position < 0 || position >= this.snacks.length) {
    }
    return this.snacks[position];
  }
}

const snacks = [  // creates an array of Snack objects.
  new Snack("twix", 1.50),
  new Snack("skittles", 1.75),
  new Snack("funions", 2.00),
];

const vendingMachine = new VendingMachine(snacks); //creates a new VendingMachine object using the snacks array.

const snack = vendingMachine.vend(1); // calls the vend method with the position 1 
console.log(snack); // logs Snack { name: 'skittles', price: 1.75 }

//Callbacks

// Make a function add that takes two arguments (numbers) and sums them together
function add(num1, num2) {
  return num1 + num2;
}
//Make a function subtract that takes two arguments (numbers) and subtracts them
function subtract(num1, num2) {
  return num1 - num2;
}
//Make a function multiply that takes two arguments and multiplies them

function multiply(num1, num2) {
  return num1 * num2;
}
// Make a function divide that takes two arguments and divides them

function divide(num1, num2) {
  return num1 / num2;
}
// Make a function calculate that takes three arguments. 
// Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
function calculate(num1, num2, operates) {
  return operates(num1, num2);
}

let ans1 = calculate(10, 13, add);
let ans2 = calculate(25, 2, subtract);
let ans3 = calculate(2, 25, multiply);
let ans4 = calculate(64, 8, divide);

console.log("Sum", ans1);
console.log("Sub:", ans2);
console.log("Multiply:", ans3);
console.log("Divide:", ans4);

//Function definition placement

// Clean up this code, so that it works and has function definitions in the correct place

const bar = () => {
    console.log('bar here');
}

const foo = () => {
    console.log('foo here');
}
bar()// Cannot access 'bar' before initialization
foo()//Cannot access 'foo' before initialization

//Error reading
// What is meant by the error(s) this produces?

// foo();

// const foo ()=>{
//     console.log('hi');
// }
// SyntaxError: Identifier 'foo' has already been declared. This error means foo was declared as with const
//in th previous lines.

// Section 3 Array Methods with Callbacks

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every
// Determine if every number is greater than or equal to 0

let num1 = nums.every(function(num) {//every method is used to check if every num in aray is >= 0
  return num >= 0// condition
})

console.log(num1)//logs 'true'

//determine if every word shorter than 8 characters

let word1 = panagram.every(function(word) {//every method is used to check if every word in array is less than 8 letters
  return word.length < 8//function condition
})

console.log(word1)// logs 'true'

//Filter
//filter the array for numbers less than 4

let num2 = nums.filter(function(num){//filter method is used to log all numbers less than 4
  return num < 4
})
console.log(num2)//[ 1, 2, 3, 0 ]

// filter words that have an even length

let word2 = panagram.filter(function(word) {//filter method is used to log all words that have an even lenght
  return word.length % 2 === 0// returns the remainder of the division operation if remainder is 0, then the number is even.
})
console.log(word2)//[ 'over', 'lazy' ]

//Find
// Find the first value divisible by 5

let num3 = nums.find(function(num) {// 'find'method used to find first num divisible by 5
  return num % 5 === 0
})
console.log(num3)// logs '5'

//find the first word that is longer than 5 characters

let word3 = panagram.find(function(word) {//'find'method used to find first word that is longer than 5 characters
  return word.length > 5;
});

console.log(word3)// logs 'undefined' because no words are more than 5 characters

// Find Index
// find the index of the first number that is divisible by 3
let num4 = nums.findIndex(function(num) {//findIndex method use to find index of first num divisible by  3
  return num % 3 === 0
})

console.log(num4)// logs '2'

// find the index of the first word that is less than 2 characters long
let word4 = panagram.findIndex(function(word) {//findIndex method use to find index of first word >2 characters
  return word.length < 2

})

console.log(word4)//logs '-1'


// For Each
// console.log each value of the nums array multiplied by 3
let num5 =nums.forEach(function(num) {// uses forEach method to log each value of the nums array multiplied by 3
  console.log(num * 3);// logs '3,6,9,12,15,18,21,24,27,30,0'
})

// console.log each word with an exclamation point at the end of it

let word5 = panagram.forEach(function(word) {//uses forEach method to log each word with '!'
  console.log(word + "!")// concatenation used to append '!'
})

// Map
// make a new array of each number multiplied by 100
let num6 = nums.map(function(num) {//uses 'map' method to make a new array multiplied by 100
  return num * 100
})
console.log(num6)//logs '100,200,300,400,600,700,800,900,1000, 0'

// make a new array of all the words in all uppercase

let word6 = panagram.map(function(word) {//uses 'map' method to make a new array in all uppercase
  return word.toUpperCase()
})
console.log(word6)//logs all words in array uppercase

// Some
// Find out if some numbers are divisible by 7
let num7 = nums.some(function(num) {// uses some method too determine if some num divisible by 7
  return num % 7 === 0
})
console.log(num7)// logs 'true'

// Find out if some words have the letter a in them

let word7 = panagram.some(function(word) {//uses some method too determine if some words have letter 'a'
  return word.indexOf("a") !== -1// "a" is present if result is not equal to -1
})
console.log(word7)// logs 'true'




