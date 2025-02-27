//Exercise 1: Basic Abstract Class
abstract class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract calculateArea(): number;

    getColor(): string {
        return this.color;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

const circle = new Circle("Red", 5);
console.log(`Circle color: ${circle.getColor()}`);
console.log(`Circle area: ${circle.calculateArea()}`);

const rectangle = new Rectangle("Blue", 4, 6);
console.log(`Rectangle color: ${rectangle.getColor()}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);

//Exercise 2: Implementing an Interface
interface Vehicle {
    speed: number;
    move(): void;
}

class Car implements Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`Car is moving at ${this.speed} km/h.`);
    }
}

class Bicycle implements Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    move(): void {
        console.log(`Bicycle is moving at ${this.speed} km/h.`);
    }
}

const car = new Car(80);
car.move();

const bicycle = new Bicycle(15);
bicycle.move();

//Exercise 3: Combining Abstract Class and Interface
interface Flyable {
    fly(): void;
}

abstract class Bird {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract eat(): void;
}

class Eagle extends Bird implements Flyable {
    constructor(name: string) {
        super(name);
    }

    eat(): void {
        console.log(`${this.name} is eating.`);
    }

    fly(): void {
        console.log(`${this.name} is flying.`);
    }
}

class Sparrow extends Bird implements Flyable {
    constructor(name: string) {
        super(name);
    }

    eat(): void {
        console.log(`${this.name} is eating.`);
    }

    fly(): void {
        console.log(`${this.name} is flying.`);
    }
}

const eagle = new Eagle("Eagle");
eagle.eat();
eagle.fly();

const sparrow = new Sparrow("Sparrow");
sparrow.eat();
sparrow.fly();

//Exercise 4: Interface Inheritance
interface Person {
    name: string;
    speak(): void;
}

interface Employee extends Person {
    salary: number;
    work(): void;
}

class Developer implements Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    speak(): void {
        console.log(`${this.name} says: Hello!`);
    }

    work(): void {
        console.log(`${this.name} is coding.`);
    }
}

const developer = new Developer("John", 5000);
developer.speak();
developer.work();

//Advanced Exercise 1: Abstract Class for Banking System
abstract class BankAccount {
    protected accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    abstract withdraw(amount: number): boolean;

    getBalance(): number {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    private withdrawalLimit: number;

    constructor(accountNumber: string, balance: number, withdrawalLimit: number) {
        super(accountNumber, balance);
        this.withdrawalLimit = withdrawalLimit;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.withdrawalLimit && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

class CheckingAccount extends BankAccount {
    private overdraftLimit: number;

    constructor(accountNumber: string, balance: number, overdraftLimit: number) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): boolean {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

const savings = new SavingsAccount("S001", 1000, 500);
savings.deposit(200);
console.log(`Savings balance: ${savings.getBalance()}`);
console.log(`Withdrawal status: ${savings.withdraw(600)}`);

const checking = new CheckingAccount("C001", 1000, 200);
checking.deposit(300);
console.log(`Checking balance: ${checking.getBalance()}`);
console.log(`Withdrawal status: ${checking.withdraw(1200)}`);

//Advanced Exercise 2: Interface for Payment System
interface PaymentMethod {
    pay(amount: number): void;
    refund(amount: number): void;
}

class CreditCard implements PaymentMethod {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using CreditCard.`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to CreditCard.`);
    }
}

class DebitCard implements PaymentMethod {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using DebitCard.`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to DebitCard.`);
    }
}

class UPI implements PaymentMethod {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    pay(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Paid ${amount} using UPI.`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    refund(amount: number): void {
        this.balance += amount;
        console.log(`Refunded ${amount} to UPI.`);
    }
}

const creditCard = new CreditCard(1000);
creditCard.pay(200);
creditCard.refund(50);

const debitCard = new DebitCard(500);
debitCard.pay(300);
debitCard.refund(100);

const upi = new UPI(300);
upi.pay(150);
upi.refund(50);

//Advanced Exercise 3: Combining Abstract Class and Interface
abstract class PaymentGateway {
    abstract processPayment(amount: number): void;
    abstract processRefund(amount: number): void;
    abstract validateTransaction(transactionId: string): boolean;
}

interface SecurePayment {
    authenticateUser(userId: string): boolean;
}

class PayPal extends PaymentGateway implements SecurePayment {
    processPayment(amount: number): void {
        console.log(`Processing payment of ${amount} via PayPal.`);
    }

    processRefund(amount: number): void {
        console.log(`Processing refund of ${amount} via PayPal.`);
    }

    validateTransaction(transactionId: string): boolean {
        console.log(`Validating transaction with ID: ${transactionId}`);
        return true;
    }

    authenticateUser(userId: string): boolean {
        console.log(`Authenticating user with ID: ${userId}`);
        return true;
    }
}

const paypal = new PayPal();
paypal.processPayment(100);
paypal.processRefund(50);
paypal.validateTransaction("TX12345");
paypal.authenticateUser("user01");

//Advanced Exercise 4: Multiple Interface Implementation
interface Loan {
    applyForLoan(amount: number): void;
}

interface Insurance {
    applyForInsurance(policy: string): void;
}

class Customer implements Loan, Insurance {
    loanDetails: string;
    insuranceDetails: string;

    applyForLoan(amount: number): void {
        this.loanDetails = `Loan of amount ${amount} applied.`;
        console.log(this.loanDetails);
    }

    applyForInsurance(policy: string): void {
        this.insuranceDetails = `Insurance with policy ${policy} applied.`;
        console.log(this.insuranceDetails);
    }
}

const customer = new Customer();
customer.applyForLoan(5000);
customer.applyForInsurance("Health");
