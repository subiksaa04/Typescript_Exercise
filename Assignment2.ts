//Q1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));//[1, 2, 3, 4, 5, 6]

//Q2
let names1 = ["Alice", "Bob"];
let names2 = ["Charlie", "David"];
let names3 = ["Eve", "Frank"];
console.log(names1.concat(names2,names3));//["Alice", "Bob","Charlie", "David","Eve", "Frank"]

//Q3
let arr1 = [true, false];
let arr2 = ["Yes", "No"];
let arr3 = arr1.concat(arr2, [1, 2, 3]);
console.log(arr3);//Error(String type not assignable to type bolean)

//Q4
let numbers = [10, 20, 30, 40, 50];
numbers.copyWithin(0, 3, 5);
console.log(numbers);//[40,50,30,40,50]

//Q5
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.copyWithin(1, 3, 5);
console.log(fruits);//["apple", "date", "elderberry", "date", "elderberry"]

//Q6
let arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0, 2);
console.log(arr);//[3, 4, 5, 6, 5, 6]

//Q7
let numbers = [2, 4, 6, 8, 10];
let even:boolean = numbers.every(i=>i%2==0);
console.log(even);//true

//Q8
let words = ["apple", "banana", "avocado"];
let results = words.every(word => word.startsWith("a"));
console.log(results);//false

//Q9
function areAllPositive(numbers: number[]): boolean {
    return numbers.every(num => num > 0);
}
let result = areAllPositive([1, 2, 3, 4, 5]);
console.log(result);//true

result = areAllPositive([1, -2, 3, 4, 5]);
console.log(result);//false

//Q10
let arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr);//[0, 0, 0, 0, 0]

//Q11
let arr = ["A", "B", "C", "D", "E"];
arr.fill("X", 1, 4);
console.log(arr);//[ 'A', 'X', 'X', 'X', 'E' ]

//Q12
let status = ["pending", "pending", "pending", "pending", "pending"];
status.fill("Done",2,5);
console.log(status);//[ 'pending', 'pending', 'Done', 'Done', 'Done' ]
