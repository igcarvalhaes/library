const showDialogButton = document.querySelector("#showDialog");
const cancelButton = document.querySelector("#cancel");
const form = document.querySelector("#form");
const main = document.querySelector("main");

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read === true ? true : false;
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
  main.innerHTML = "";

  library.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // colocando um valor correspondente ao index do objeto no array
    bookCard.setAttribute("data-index", index++);

    bookCard.innerHTML = `
        <div class="book-title">${book.title}</div>
        <div class="book-author">Author: ${book.author}</div>
        <div class="pages">Pages: ${book.pages}</div>
        <div class="bookRead">
        <label for="my-toggle">Read:</label>
        <input type="checkbox" id="my-toggle">
         </div>
        <button class="btn deleteBtn">Delete Book</button>
      `;

    main.appendChild(bookCard);

    const checkBox = bookCard.querySelector("#my-toggle");
    checkBox.checked = book.read;
    checkBox.addEventListener("change", () => {
      updateBookStatus(index - 1);
    });

    // deletar o card do livro específico
    const deleteButton = bookCard.querySelector(".deleteBtn");
    deleteButton.addEventListener("click", () => {
      if (library.length === 1) {
        library.shift();
        showBooks(library);
      } else {
        library.splice(index - 1, 1);
        showBooks(library);
      }
    });
  });
}

function updateBookStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
}

// modal settings

showDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelButton.addEventListener("click", () => {
  dialog.close();
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
});

showBooks(myLibrary);
