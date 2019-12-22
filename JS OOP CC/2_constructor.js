//Constructor 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year =  year;

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    };
}

// Instantiate an object
const book1 = new Book('Book One', 'John Do', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book2);