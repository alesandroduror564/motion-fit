/*
Filename: complexCode.js

Description: This code demonstrates a complex implementation of a virtual bookstore. It includes various classes, functions, and data structures to manage books, customers, orders, and inventory.

Note: This code is purely illustrative and may not include all necessary error handling and optimizations.

*/

// Book class
class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  getFormattedPrice() {
    return `$${this.price.toFixed(2)}`;
  }
}

// Customer class
class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Order class
class Order {
  static idCounter = 1;

  constructor(customer, books) {
    this.id = Order.idCounter++;
    this.customer = customer;
    this.books = books;
    this.orderDate = new Date();
  }

  getTotalPrice() {
    let totalPrice = 0;
    for (const book of this.books) {
      totalPrice += book.price;
    }
    return totalPrice;
  }

  getFormattedOrderDate() {
    return this.orderDate.toLocaleString();
  }
}

// Inventory class
class Inventory {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  searchBooksByAuthor(author) {
    return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }
}

// Example usage
const inventory = new Inventory();

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 9.99);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 12.99);
const book3 = new Book("1984", "George Orwell", 7.99);

inventory.addBook(book1);
inventory.addBook(book2);
inventory.addBook(book3);

const customer1 = new Customer(1, "John Doe", "john.doe@example.com");
const customer2 = new Customer(2, "Jane Smith", "jane.smith@example.com");

const order1 = new Order(customer1, [book1, book2]);
const order2 = new Order(customer2, [book3]);

console.log("Inventory:");
console.log(inventory.books);

console.log("Order 1:");
console.log("Order ID:", order1.id);
console.log("Customer:", order1.customer.name);
console.log("Books:", order1.books.map(book => book.title).join(", "));
console.log("Total Price:", order1.getTotalPrice());
console.log("Order Date:", order1.getFormattedOrderDate());

console.log("Order 2:");
console.log("Order ID:", order2.id);
console.log("Customer:", order2.customer.name);
console.log("Books:", order2.books.map(book => book.title).join(", "));
console.log("Total Price:", order2.getTotalPrice());
console.log("Order Date:", order2.getFormattedOrderDate());

console.log("Books by 'Harper Lee':");
console.log(inventory.searchBooksByAuthor("Harper Lee"));