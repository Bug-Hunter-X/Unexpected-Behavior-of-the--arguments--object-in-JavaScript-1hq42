function myFunc() {
  const args = [...arguments];
  console.log(args[0]);
  console.log(args[1]);
}

myFunc(1, 2, 3); // Output: 1, 2
myFunc(1); // Output: 1, undefined