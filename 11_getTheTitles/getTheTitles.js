const getTheTitles = function(arr) {
    let books = [];
    for (let book of arr) {
            books.push(book.title);
    }
    return books;

};

// Do not edit below this line
module.exports = getTheTitles;
