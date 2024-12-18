function myFunc() {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

myFunc(1, 2, 3); // Output: 1, 2
myFunc(1); //Output:1, undefined