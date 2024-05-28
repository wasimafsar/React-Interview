hoisting(x, y); // In memory phase x and y are added to a local scope called temporal dead zone and not global scope like var so we get error here
let x = 10;
let y = 10;
function hoisting(x, y) {
  console.log(x, y);
}
