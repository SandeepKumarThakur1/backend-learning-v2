// Fundamentals of JavaScript
// Array and Object
// Functions Return
// Async JS Coding


// Array - forEach, map, filter, find, indexOf
var arr = [1, 2, 3, 4, 5, 3, 5, 6, 7, 2, 1, 1.5, 5];

// forEach
arr.forEach(function (val, index, arr) {
  console.log(val, index, arr);
});

// map
const newArr = arr.map((val, index, arr) => {
  return val, index, arr;
});
console.log(newArr);

// fiiter
const filterArr = arr.filter((val) => {
  if (val >= 5) return true;
  else return false;
});
console.log(filterArr);

// find - Find Value
const findArray = arr.find((val) => {
  if (val === 5) return val;
});
console.log("Return First Value ", findArray);

// indexOf - Find index of that number
console.log(
  "If value in array then print index of that number other wise print -1 ",
  arr.indexOf(16)
);
console.log(arr.indexOf(5));


// Objects
var obj = {
  name: "Ram",
  age: 45,
};
Object.freeze(obj); // for not any change like name, age... etc.
obj.age = 25;

console.log(obj);
console.log(obj.name);
console.log(obj["name"]);
console.log(obj.age);


// function return
function abcd(){
  return "Hello World";
}

var ans = abcd();
console.log(ans)


// async js 
async function user(){
  const blob = await fetch(`https://randomuser.me/api/`);
  const res = await blob.json();
  console.log(res.results[0].name)
}

user()