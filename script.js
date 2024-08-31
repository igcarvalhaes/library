const showDialogButton = document.querySelector("#showDialog");
const cancelButton = document.querySelector("#cancel");
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

    bookCard.innerHTML = `
        <div class="book-title">${book.title}</div>
        <div class="book-author">Author: ${book.author}</div>
        <div class="pages">Pages: ${book.pages}</div>
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

showBooks(myLibrary);
