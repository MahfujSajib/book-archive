const searchBooks = () => {
    const bookName = document.getElementById('book-name');
    const searchBooks = bookName.value;
    bookName.value = ""
    const url = `https://openlibrary.org/search.json?q=${searchBooks}`;
    fetch(url)
        .then(res => res.json())
        .then(data => getBooks(data.docs))
}
const getBooks = getBook => {
    const searchBooks = document.getElementById('books');
    searchBooks.textContent = '';
    // Show book Number
    const bookNumber = document.getElementById('book-number');
    bookNumber.textContent = "";
    bookNumber.style.textAlign = "center";
    bookNumber.style.color = "rgb(255, 0, 0)";
    if (getBook.length > 0) {
        const bookNumberDiv = document.createElement('div');
        bookNumberDiv.innerHTML = `
            <h3>Total Books: ${getBook.length}</h3>
        `
        bookNumber.appendChild(bookNumberDiv)
    }
    // Book Not Found
    const notFound = document.getElementById('not-found');
    notFound.style.textAlign = "center";
    notFound.style.color = "rgb(255, 0, 0)";
    if (getBook.length == 0) {
        const notFoundDiv = document.createElement('div');
        notFoundDiv.innerHTML = `
            <h3>No result found</h3>
         `
        notFound.appendChild(notFoundDiv);
    }
    // Get your books
    getBook.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div id = "books" class="card h-100" >
                <div class="card-body">
                   <img class="img-fluid" src="https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg" alt="">
                        <h5 class="card-title mt-3">Book Name: ${book.title}</h5>
                        <p class="card-text">Author Name: ${book.author_name}</p>
                        <p>Publish Year: <b>${book.first_publish_year}</b></p>
                        <p>language: ${book.language}</p>
                        <p>Publisher: ${book.publisher}</p>
                        <p>Publis-Place: ${book.publish_place}</p>
                </div>
            </div>

        `
        searchBooks.appendChild(div);
    });
}







