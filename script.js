const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const lordOfTheRings = new Book("Lord of The Rings", "Tolkien", 400);
const harryPotter = new Book("Harry Potter 1", "JK Rowling", 599);

myLibrary.push(lordOfTheRings);
myLibrary.push(harryPotter);

function showBooks(library) {
  return library.map((book) => {
    return {
      title: book.title,
      author: book.author,
      pages: book.pages,
    };
  });
}

console.log(showBooks(myLibrary));
