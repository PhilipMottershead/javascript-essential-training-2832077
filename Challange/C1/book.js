class Book {
  constructor(title, author, year_of_publication, date_purchased) {
    this.author = author;
    this.title = title;
    this.year_of_publication = year_of_publication;
    this.date_purchased = Date.parse(date_purchased);
  }
  years_since_purchased() {
    var now = new Date();
    var diff = now - this.date_purchased;
    return diff / 31536000000;
  }
}

const book1 = new Book("book1", "dave", 2012, "December 5, 2020 15:00:00 PST");
const book2 = new Book("book2", "sam", 1990, "January 5, 2020 15:00:00 PST");
const book3 = new Book("book3", "dave", 2020, "December 5, 2020 15:00:00 PST");
const book4 = new Book("book4", "gary", 2002, "December 5, 2020 15:00:00 PST");
const book5 = new Book("book5", "jon", 1975, "May 5, 2020 15:00:00 PST");
// console.log(book1);
// console.log(book2);
// console.log(book3);
// console.log(book4);
// console.log(book5);
// console.log(book5.years_since_published());

// class TaxCalculator {
//   static calculate(total) {
//     return total * 0.5;
//   }
// }
// var obj;
// console.log(obj);

// class X {
//   get Y() {
//     return 42;
//   }
// }
// var x = new X();

// console.log(x.Y);

var v = 1;

var f1 = function () {
  console.log(v);
};

var f2 = function () {
  v = 2;
  f1();
};

f2();
