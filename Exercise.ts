//Exercise1
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
let strings: string[] = ["apple", "banana", "cherry"];
console.log(strings);
let booleans: boolean[] = [true, false, true];
console.log(booleans);
let mixed: (number | string)[] = [1, "apple", 2, "banana"];
console.log(mixed);

//Exercise2
let fruits: string[] = ["apple", "banana", "mango"];

fruits.push("grapes");

fruits.shift();

fruits.splice(2, 0, "pineapple");

fruits.reverse();

console.log(fruits); 

//Exercise3
let numbers: number[] = [10, 20, 30, 40, 50, 60];

let doubled = numbers.map(num => num * 2);

let filtered = numbers.filter(num => num <= 50);

let sum = numbers.reduce((acc, num) => acc + num, 0);

console.log("Doubled numbers:", doubled);
console.log("Filtered numbers:", filtered);
console.log("Sum:", sum);

//Exercise4
let values: number[] = [10, 20, 30, 40, 50];

let result = values.find(num => num > 25);

let index = values.indexOf(40);

console.log("First number > 25:", result);  // 30
console.log("Index of 40:", index);  // 3


//Exercise5
let scores: number[] = [55, 23, 87, 12, 99, 38];

let ascending = [...scores].sort((a, b) => a - b);

let descending = [...scores].sort((a, b) => b - a);

console.log("Ascending order:", ascending);  
console.log("Descending order:", descending); 

//6
let student: [string, number, boolean] = ["John", 21, true];
student[1] = 22;
console.log(student);  

//7
let roles: string[] = ["User", "Editor", "Admin", "Moderator"];
let hasAdmin = roles.includes("Admin");
let hasSuper = roles.some(role => role.startsWith("Super"));
console.log("Contains Admin:", hasAdmin);  
console.log("Has Super role:", hasSuper); 

//Exercise8
let nestedArray: (number | number[])[] = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2);  
console.log(flattenedArray);  

//Exercise9
let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [3, 4, 5, 6];
let uniqueArray = Array.from(new Set([...arr1, ...arr2]));
console.log(uniqueArray);  

//Exercise10
interface Employee {
    name: string;
    age: number;
    position: string;
}

let employees: Employee[] = [
    { name: "Alice", age: 25, position: "Developer" },
    { name: "Bob", age: 35, position: "Manager" },
    { name: "Charlie", age: 40, position: "Developer" },
    { name: "David", age: 28, position: "Designer" }
];

let filteredEmployees = employees.filter(employee => employee.age > 30);
console.log(filteredEmployees);
