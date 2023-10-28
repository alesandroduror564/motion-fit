/* sophisticated_code.js */

// This code is a simulation of a library management system
// It handles books, members and library loans

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.available = true;
  }
}

class Member {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.books = [];
  }

  borrowBook(book) {
    if (book.available) {
      this.books.push(book);
      book.available = false;
      console.log(`${this.name} borrowed book "${book.title}"`);
    } else {
      console.log(`Book "${book.title}" is not available.`);
    }
  }

  returnBook(book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
      book.available = true;
      console.log(`${this.name} returned book "${book.title}"`);
    } else {
      console.log(`${this.name} doesn't have book "${book.title}"`);
    }
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.members = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Added book "${book.title}" to the library.`);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index > -1) {
      this.books.splice(index, 1);
      console.log(`Removed book "${book.title}" from the library.`);
    } else {
      console.log(`Book "${book.title}" not found in the library.`);
    }
  }

  addMember(member) {
    this.members.push(member);
    console.log(`Added member "${member.name}" to the library.`);
  }

  removeMember(member) {
    const index = this.members.indexOf(member);
    if (index > -1) {
      this.members.splice(index, 1);
      console.log(`Removed member "${member.name}" from the library.`);
    } else {
      console.log(`Member "${member.name}" not found in the library.`);
    }
  }
}

// Usage example

const library = new Library("My Library");

const book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book(2, "To Kill a Mockingbird", "Harper Lee");
const book3 = new Book(3, "1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const member1 = new Member(1, "John");
const member2 = new Member(2, "Emily");

library.addMember(member1);
library.addMember(member2);

member1.borrowBook(book1);
member1.borrowBook(book3);
member1.returnBook(book1);
member2.borrowBook(book3);

library.removeBook(book2);

library.removeMember(member1);