// DRY:
//Acronym for "Don't Repeat Yourself"

//KISS: 
//Acronym for "Keep it simple, stupid", Simple code takes less time to write, 
//has fewer bugs, and is easier to modify.

//Avoid creating a YAGNI:
//don't use functionality unless necessary.


// Do the simplest thing that could possibly work:
//keep on a path towards simplicity in the design.

// Don't make me think:
//code should be easily read and understood with a minimum of effort required.


// Write code for the maintainer:
// code that is worth writing is worth maintaining in the future, either by you or by someone else. 
// Even a complete stranger, so you might as well always write for someone else.


// Single responsibility principle:
//code should perform a single well defined task.

// Avoid premature optimization:
//think about optimization when your code is working slower than you want.

// Separation of concerns:
//areas of functionality should be managed by distinct modules of code.


// Commenting Code
// Comment each line of this code and describe what it is doing. 

//1.
const f = l => {   // defines a function f "l" is a parameter

    let es = 0, p = 0, c = 1, n = 0 // declares variables es, p, c, n
   
   
    while (c <= l) { // loop iterates as long as c is less than or equal to l

      n = c + p   // This line adds the 'c' to  'p'.
      [c, p]=[n, c] // This line shows the values of `c` and `p`,`c` is now the value of `n` and `p` is now the value of `c` 
      es += (c % 2 === 0) ? c : 0 // This line adds 'c' to the sum of 'es' if 'c' is even
        }
    return es;// This line returns the sum of all even numbers less than or equal to `l`.  }
      }
  console.log(f(55)) // This line calls the `f` function with the input `55` and prints the result to the console.
  

//2.

let f2 = (limit) => { // create funcyion with param of 'limit
  let evenSum = 0;// declare variable
  let previous = 0;// declare variable
  let current = 1;// declare variable
  while (current <= limit) {// creates while loop with conditions current must be <= limit
    let next = current + previous; // declare variable
    previous = current;
    current = next;
    if (current % 2 === 0) { //if statement that adds the value of current to the variable evenSum if even
      evenSum += current;
    }
  }
  return evenSum;
}


console.log(f2(55))// calls  f2 function with input 55

