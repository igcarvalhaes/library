const main = document.querySelector("main");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const lordOfTheRings = new Book("Lord of The Rings", "Tolkien", 400);
const harryPotter = new Book("Harry Potter", "JK Rowling", 599);
const crepusculo = new Book("Crepusculo", "Sei la", 200);

myLibrary.push(lordOfTheRings);
myLibrary.push(harryPotter);
myLibrary.push(crepusculo);

function mostrarLivros(library) {
  library.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
        <div class="book-title">${book.title}</div>
        <div class="book-author">${book.author}</div>
        <div class="pages">${book.pages} Pages</div>
      `;

    main.appendChild(bookCard);
  });
}

mostrarLivros(myLibrary);
