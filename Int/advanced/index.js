// function first() {
//   console.log("first");
//   second();
// }

// function second() {
//   console.log("second");
//   third();
// }

// function third() {
//   console.log("third");
// }

// first(); // try them on browser sources to see code flow in stack . The "ananymous" in call stack is Execution Context

// const obj = {
//   name: "Conner",
//   age: 27,
//   greet: function () {
//     console.log(`Hey, my name is ${this.name}`);
//   },
// };
// obj.greet();

const object1 = {
  prop1: "value1",
  prop2: {
    prop3: "value3",
  },
};
const newObj = JSON.parse(JSON.stringify(object1));
newObj.prop2.prop3 = "newValue3";
newObj.prop1 = "newObj";
console.log(object1.prop2.prop3);
console.log(object1.prop1);
