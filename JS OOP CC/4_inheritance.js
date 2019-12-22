//Constructor 
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year =  year;
}

//getSummary 
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`
};

//magazine constructor
function Magazine(title, author, year, month) {
Book.call(this, title, author, year);
this.month = month;
}

// Inheritance Prototype-- must be set prior to instatiation
Magazine.prototype = Object.create(Book.prototype);

// Instantiate an object for magazine
const mag1 = new Magazine('Mag One', 'John Do', '2018', 'Jan');

//use magazine constructor
Magazine.prototype.constructor =  Magazine;


console.log(mag1);



