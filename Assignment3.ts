//Ex.1 - Variables & Types
let userName: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;
 
//Ex.2 - Functions & Type Annotations
function add(a: number, b: number): number {
    return a + b;
}
const result = add(5, 10); 
console.log(result); //15
 
//Ex.3 - Function with Optional
function greet(name: string, message: string = "Hello"): string {
    return `${message}, ${name}!`;
}
console.log(greet("John"));          //  "Hello, John!"
console.log(greet("Jane", "Hi"));    // "Hi, Jane!"

//Ex.4 - Union Types
function displayId(id: number | string): void {
    console.log(`ID: ${id}`);
}
displayId(123);        //  ID: 123
displayId("abc123");   //  ID: abc123

//Ex.5 - Arrays & Tuples
let numbers: number[] = [1, 2, 3, 4, 5];
let person: [string, number] = ["John Doe", 30];
console.log("Numbers array:", numbers);  //  [1, 2, 3, 4, 5]
console.log("Person tuple:", person);    // ["John Doe", 30]
numbers.push(6);
console.log("Updated numbers array:", numbers); // [1, 2, 3, 4, 5, 6]

//Ex.6 - Interfaces
interface Person {
    name: string;
    age: number;
    email: string;
  }
  const user: Person = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
  };
  
  console.log(user);  //  { name: 'John Doe', age: 30, email: 'johndoe@example.com' }

//Ex.7 - Type Aliases
type Employee = {
    id: number;
    name: string;
    role: "admin" | "manager" | "employee";
  };
  const employee: Employee = {
    id: 101,
    name: "Alice Smith",
    role: "manager"
  };
  
  console.log(employee);  //  { id: 101, name: 'Alice Smith', role: 'manager' }

//Ex.8 - Enums
enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
  }
  let favoriteColor: Color = Color.Green;
  
  console.log(favoriteColor);  //  Green

//Ex.9 - Readonly & Partial
interface User {
    id: number;
    name: string;
    email: string;
  }
  const user: Readonly<User> = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com"
  };
  const updatedUser: Partial<User> = {
    name: "Jane Doe" 
  };
  
  console.log(user);  //  { id: 1, name: 'John Doe', email: 'john.doe@example.com' }
  console.log(updatedUser);  //  { name: 'Jane Doe' }
  
  //Ex.10 - Classes in TypeScript
class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
    getCarInfo(): string {
      return `${this.brand} ${this.model} (${this.year})`;
    }
  }
  const myCar = new Car("Toyota", "Corolla", 2020);
  console.log(myCar.getCarInfo());  //  "Toyota Corolla (2020)"
  