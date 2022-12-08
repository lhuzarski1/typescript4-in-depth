function GetAllBooks() {
	let books = [
		{ id: 1, title: 'Harry Potter', author: 'J.K. Rowling', available: true, category: Category.Fantasy },
		{ id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', available: false, category: Category.Fantasy },
		{ id: 3, title: 'Steve Jobs', author: 'Walter Isaacson', available: true, category: Category.Biography },
		{ id: 4, title: 'A Game of Thrones', author: 'George R. R. Martin', available: true, category: Category.Fantasy }
	];
	return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
	let numberOfBooks: number = books.length;
	let firstAvailable: string = '';

	for(let currentBook of books) {

		if(currentBook.available) {
			firstAvailable = currentBook.title;
			break;
		}
	}
	console.log('Total Books: ' + numberOfBooks);
	console.log('First Available: ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fantasy): Array<string> {
	console.log('Getting books in category: ' + Category[categoryFilter]);

	const allBooks = GetAllBooks();
	const filteredTitles: string[] = [];

	for(let currentBook of allBooks) {
		if(currentBook.category === categoryFilter) {
			filteredTitles.push(currentBook.title);
		}
	}

	return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
	for(let title of titles) {
		console.log(title);
	}
}

enum Category { Biography, Poetry, Fantasy, History, Children };

function GetBookByID(id: number) {
	const allBooks = GetAllBooks();
	return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
	return name + id;
}

function CreateCustomer(name: string, age?: number, city?: string): void {
	console.log('Creating customer ' + name);

	if (age) {
		console.log('Age: ' + age);
	}

	if (city) {
		console.log('City: ' + city);
	}
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
	console.log('Checking out books for ' + customer);

	let booksCheckedOut: string[] = [];

	for(let id of bookIDs) {
		let book = GetBookByID(id);
		if (book.available) {
			booksCheckedOut.push(book.title);
		}
	}

	return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(author: string, available: boolean): string[];
function GetTitles(author: string, available?: boolean): string[] {
	const allBooks = GetAllBooks();
	const searchResults: string[] = [];

	if(available !== undefined) {
		for(let book of allBooks) {
			if(book.author === author && book.available === available) {
				searchResults.push(book.title);
			}
		}
	} else {
		for(let book of allBooks) {
			if(book.author === author) {
				searchResults.push(book.title);
			}
		}
	}
	return searchResults;
}
// ****
let myBooks: string[] = GetTitles('Walter Isaacson', false);
myBooks.forEach(title => console.log(title));