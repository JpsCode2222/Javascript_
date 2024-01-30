// Operators : for manipulation kind of stuff
let a = 44;
let b = 2; // = operator

// Arithmetic Operators
console.log(a + b); // + operator     46
console.log(a - b); // - operator     42
console.log(a / b); // / operator     22
console.log(a ** b); // ** operator   1936
console.log(a * b); // * operator     88
console.log(a++); // ++ operator      44
console.log(++a); // ++ operator      46
console.log(--a); // -- operator      45
console.log(a--); // -- operator      45

// Assignment Operator
let Assignment;
Assignment = a += 5; // a = a + 5     // = also a assignment operator
console.log(Assignment);

// Comparision Operators
let x = 10;
let y = "10";
console.log(x == y); // true // check only data
console.log(x === y); // fasle // check data with data type
console.log(x != y); // false // check data with data type
console.log(x !== y); // true // check data with data type

// Logical Operators
let p = 5;
let q = 6;
console.log(p < y && p == 5); // T T = T
console.log(p < y || p == 5); // T T = T
console.log(!p == 5); // false
