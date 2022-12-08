function GetAllBooks() {
    let books = [
        { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', available: true, category: Category.Fantasy },
        { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', available: false, category: Category.Fantasy },
        { id: 3, title: 'Steve Jobs', author: 'Walter Isaacson', available: true, category: Category.Biography },
        { id: 4, title: 'A Game of Thrones', author: 'George R. R. Martin', available: true, category: Category.Fantasy }
    ];
    return books;
}
function LogFirstAvailable(books = GetAllBooks()) {
    let numberOfBooks = books.length;
    let firstAvailable = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter = Category.Fantasy) {
    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (let title of titles) {
        console.log(title);
    }
}
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fantasy"] = 2] = "Fantasy";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
;
function GetBookByID(id) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function CheckoutBooks(customer, ...bookIDs) {
    console.log('Checking out books for ' + customer);
    let booksCheckedOut = [];
    for (let id of bookIDs) {
        let book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(author, available) {
    const allBooks = GetAllBooks();
    const searchResults = [];
    if (available !== undefined) {
        for (let book of allBooks) {
            if (book.author === author && book.available === available) {
                searchResults.push(book.title);
            }
        }
    }
    else {
        for (let book of allBooks) {
            if (book.author === author) {
                searchResults.push(book.title);
            }
        }
    }
    return searchResults;
}
// ****
let myBooks = GetTitles('Walter Isaacson', false);
myBooks.forEach(title => console.log(title));
