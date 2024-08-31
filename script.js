const showDialogButton = document.querySelector("#showDialog");
const cancelButton = document.querySelector("#cancel");
const form = document.querySelector("#form");
const main = document.querySelector("main");

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const lordOfTheRings = new Book("Lord of The Rings", "Tolkien", 400);
const harryPotter = new Book("Harry Potter", "JK Rowling", 599);
const sherlockHolmes = new Book(
  "Sherlock Holmes",
  "Sir Arthur Conan Doyle",
  200
);

myLibrary.push(lordOfTheRings);
myLibrary.push(harryPotter);
myLibrary.push(sherlockHolmes);

function showBooks(library) {
  library.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = "";

    bookCard.innerHTML = `
        <div class="book-title">${book.title}</div>
        <div class="book-author">Author: ${book.author}</div>
        <div class="pages">Pages: ${book.pages}</div>
        <button id="deleteBtn" class="btn" >Delete Book</button>
      `;

    main.appendChild(bookCard);
  });
}

// modal settings

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

showDialogButton.addEventListener("click", () => {
  dialog.showModal();
  openCheck(dialog);
});

cancelButton.addEventListener("click", () => {
  dialog.close();
  openCheck(dialog);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let bookTitle = document.querySelector("#book-title").value;
  let bookAuthor = document.querySelector("#book-author").value;
  let bookPages = +document.querySelector("#book-pages").value;

  const newBook = new Book(bookTitle, bookAuthor, bookPages);

  myLibrary.push(newBook);

  // limpando o container main para evitar duplicidade do array na tela
  main.innerHTML = "";

  // exibir o conteúdo do array na tela novamente
  showBooks(myLibrary);

  dialog.close();

  console.log(bookTitle);
  console.log(bookAuthor);
  console.log(bookPages);
});

showBooks(myLibrary);
