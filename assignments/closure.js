// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function greeting() {
  const name = "kevin";
  function sayHi() {
    return `Hi ${name} nice to me you`;
  }
  return sayHi();
}
 console.log(greeting());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let number = 0;
  function IncreaseNum() {
    return ++number;
  }
  return IncreaseNum;
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  
  return {
    increment: function increment(num) { return ++num},  
    decrement: function decrement(num) { return --num}
  }
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
const IncreaseNumber = counterFactory();
console.log(IncreaseNumber.increment(3));
