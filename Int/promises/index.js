// basic promise see function description via intellisense
function first() {
  const promise = new Promise(function (resolve, reject) {
    resolve(10);
    reject(100);
  });

  promise.then((result) => {
    console.log(result);
  }),
    (rejected) => {
      console.log(rejected);
    };
}

first();
//var a = 30; // this a will be added to script scope, if it is var then will be global scope
function second() {
  //  const a = 50;
  //console.log(a); // checks a in second function  , next moves to script source , next in global scope
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 100);
    reject(10);
  });
  promise.then(
    (result) => console.log(result),
    (reject) => console.log(reject)
  );
}

second();

function third() {
  const a = 19;
  const abcd = () => {
    // const a = 40;
    console.log(a); // this here again refers to global window object
  };
  abcd();
}

third();

function Person(name) {
  (this.name = name),
    (this.getName = () => {
      console.log(this.name);
    });
}

const person = new Person("Wasim");
person.getName();

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 1000);
});

promise.then(
  (success) => console.log(success),
  (failure) => console.log(failure)
);
