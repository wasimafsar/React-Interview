var obj = {
  firstName: "Wasim",
  lastName: "Afsar",
  getName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Remember this as BCA - bind , call , apply . Bind creates a new object other's dont
var check = function (course, year) {
  console.log(this.getName()); // fails when u dont pass 'this' reference since this refers to window object and there is no getName in window object
  console.log(course);
  console.log(year);
};

var callObj = check.bind(obj); // when u do bind we pass obj as 'this' so wherever u see 'this' will now refer to bound object , obj in this case . creates new object callObj
callObj("BE", "2022"); // the callObj u can now pass parameters of function

check.call(obj, "BE", "2022"); // with call no new object is created , directly pass parameters and here again refernces of 'this' will be replaced by passing object 'obj'

check.apply(obj, ["BE", "2022"]); // with apply again all references of this replaced bu obj but in this case u need to pass params as array . no new object is created like call here
