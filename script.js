const searchBooks = () => {
    const bookName = document.getElementById('book-name');
    const searchBooks = bookName.value;
    bookName.value = ""
    const url = `http://openlibrary.org/search.json?q=${searchBooks}`
    fetch(url)
        .then(res => res.json())
        .then(data => getBooks(data.docs))
}
const getBooks = getBook => {
    const searchBooks = document.getElementById('books');
    searchBooks.textContent = '';
    const notFound = document.getElementById('not-found');
    notFound.style.textAlign = "center";
    notFound.style.color = "rgb(255, 0, 0)";
    if (getBook.length == 0) {
        const notFoundDiv = document.createElement('div');
        notFoundDiv.innerHTML = `
            <h3>No result found</h3>
         `
        notFound.appendChild(notFoundDiv)
    }
    getBook.forEach(book => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div id = "books" class="card h-100" >
                <img src="${book.last_modified_i} " class="card-img-top">
                <div class="card-body">
                        <h5 class="card-title">Title: ${book.title}</h5>
                        <p class="card-text">Author Name: ${book.author_name}</p>
                        <p>Publish Date: ${book.first_publish_year}</p>
                        <p>language: ${book.language}</p>
                        <p>Publisher: ${book.publisher}</p>
                        <p>Publis-Place: ${book.publish_place}</p>

                 </div>
            </div>

        `
        searchBooks.appendChild(div)
    });
}







