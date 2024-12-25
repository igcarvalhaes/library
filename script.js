const showDialogButton = document.querySelector("#showDialog");
const cancelButton = document.querySelector("#cancel");
const form = document.querySelector("#form");
const main = document.querySelector("main");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read === true ? true : false;
}

function setItemsToLocalStorage(myLibrary) {
  localStorage.setItem("livraria", JSON.stringify(myLibrary));
}

function getItemsFromLocalStorage() {
  const storedData = localStorage.getItem("livraria");

  if (storedData) {
    const data = JSON.parse(storedData);
    return data;
  } else {
    return [];
  }
}

const myLibrary = getItemsFromLocalStorage();

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
      setItemsToLocalStorage(library);
    });

    // deletar o card do livro específico
    const deleteButton = bookCard.querySelector(".deleteBtn");
    deleteButton.addEventListener("click", () => {
      if (library.length === 1) {
        library.shift();
        setItemsToLocalStorage(library);
        showBooks(library);
      } else {
        library.splice(index - 1, 1);
        setItemsToLocalStorage(library);
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
  setItemsToLocalStorage(myLibrary);

  // limpando o container main para evitar duplicidade do array na tela
  main.innerHTML = "";

  // exibir o conteúdo do array na tela novamente
  showBooks(myLibrary);

  dialog.close();
});

showBooks(myLibrary);
