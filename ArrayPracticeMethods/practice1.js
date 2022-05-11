/*
Methods used in this JavaScript file
  'concat',
  'entries',
  'fill',
  'filter',
  'indexOf',
  'indexOf & display array index',
  'join',
  'push',
  'sort',
  'splice',
  'unshift'
*/

let newarray = []; // Empty Array
let methods = ["push","indexOf","splice","join","indexOf & display array index","concat","unshift","entries","fill","filter","sort"]; // Array referencee that is used in this javascript file

// Sorts an array in place. This method mutates the array and returns a reference to the same array.
let sortmethods = methods.sort();
console.log(sortmethods);

// Appends new elements to the end of an array, and returns the new length of the array.
newarray.push("item1")
console.log(newarray);

// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
let itemIndex = newarray.indexOf("item1");
console.log(itemIndex);

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
newarray.splice(++itemIndex, 0, "item2","item3");
console.log(newarray);

// Adds all the elements of an array into a string, separated by the specified separator string.
let joinarray = newarray.join(", ");
console.log(joinarray);

// Find index of any given string & display
let ime = ["Kire","Martin","Filip"];
let imeIndex = ime.indexOf("Martin"); // ime.indexOf = 1
console.log(ime[imeIndex]);

// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let newarrayforconcat = ["item4","item5","item6"];
let arrayconcan = newarray.concat(newarrayforconcat);
console.log(arrayconcan);

// Inserts new elements at the start of an array, and returns the new length of the array.
let newitem = arrayconcan.unshift("item0");
console.log(`Currently ${newitem} items in newarray`);
console.log(arrayconcan);

// Returns an iterable of key, value pairs for every entry in the array
let iterable = newarray.entries();
console.log(iterable.next().value);
console.log(iterable.next().value);

// Changes all array elements from start to end index to a static value and returns the modified array
let fillarray = arrayconcan.fill("newitem",2,4); // 2 = Start Index & 4 = End Index
console.log(fillarray);

// Returns the elements of an array that meet the condition specified in a callback function.
newarray.push("newitem1","newitemforfilter");
let words = newarray.filter(newarray => newarray.length > 5);
console.log(newarray);
newarray.splice(3,2); // Delete latest 2 Elemens
// console.log(newarray);