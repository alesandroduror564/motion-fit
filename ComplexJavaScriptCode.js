/* Filename: ComplexJavaScriptCode.js */

// This code demonstrates a complex and elaborate implementation of a banking system

class Bank {
  constructor() {
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  removeCustomer(customer) {
    const index = this.customers.indexOf(customer);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
  }

  getNumberOfCustomers() {
    return this.customers.length;
  }

  getCustomerByName(name) {
    return this.customers.find((customer) => customer.fullName === name);
  }

  getAllCustomers() {
    return this.customers;
  }
}

class Customer {
  constructor(fullName, account) {
    this.fullName = fullName;
    this.account = account;
  }

  getAccountBalance() {
    return this.account.getBalance();
  }

  deposit(amount) {
    this.account.deposit(amount);
    console.log(`${this.fullName} deposited ${amount}`);
  }

  withdraw(amount) {
    if (this.account.canWithdraw(amount)) {
      this.account.withdraw(amount);
      console.log(`${this.fullName} withdrew ${amount}`);
    } else {
      console.log(`Insufficient funds for ${this.fullName} to withdraw ${amount}`);
    }
  }
}

class Account {
  constructor(balance = 0) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  canWithdraw(amount) {
    return this.balance >= amount;
  }
}

// Creating Bank instance
const bank = new Bank();

// Creating customers and accounts
const account1 = new Account(1000);
const customer1 = new Customer("John Doe", account1);

const account2 = new Account(5000);
const customer2 = new Customer("Jane Smith", account2);

const account3 = new Account(2000);
const customer3 = new Customer("Bob Johnson", account3);

// Adding customers to the bank
bank.addCustomer(customer1);
bank.addCustomer(customer2);

console.log(`Number of customers: ${bank.getNumberOfCustomers()}`);

// Performing transactions
customer1.deposit(500);
customer2.withdraw(2000);
customer3.withdraw(1000);

console.log(`Customer ${customer1.fullName}'s account balance: ${customer1.getAccountBalance()}`);

console.log("All customers:");
console.log(bank.getAllCustomers());

// Removing a customer from the bank
bank.removeCustomer(customer1);
console.log(`Number of customers after removal: ${bank.getNumberOfCustomers()}`);

console.log(`Customer ${customer1.fullName} is ${bank.getCustomerByName(customer1.fullName) ? '' : 'not'} found in the bank.`);
