//callback function
//number
function nameFunction(num1, num2, callback) {
  result = num1 + num2;
  callback(result);
}
function showresult(result) {
  // document.write("result: " + result);
}
nameFunction(10, 20, showresult);
//string
function firstName(name1, name2, namecall) {
  store = name1 + name2;
  namecall(store);
}
function names(store) {
  // document.write("Names: " + store);
}
firstName("sathya", "mani", names);
//userInput
function userInput(callback) {
  const data = prompt("Enter the name:");
  callback(data);
}
function display(data) {
  //   alert(`Name : ${data}`);
  document.write("<h1>Name &#8594 " + data + "</h1>");
}
userInput(display);

//function expression

var number = function (a, b) {
  return a + b;
};

var number1 = number(2, 3);

// document.write("answer:" + number1);

//fizz Buzz

var num = 15;
result = "";
if (num % 3 === 0) {
  result += "fizz";
}
if (num % 5 === 0) {
  result += "buzz";
}
document.write(result);

//expression

(function () {
  // console.log("welcome");
})();
