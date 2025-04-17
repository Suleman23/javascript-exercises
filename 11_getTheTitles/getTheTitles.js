const getTheTitles = function(book) {
    let b = [];
    for (let i = 0; i < book.length; i++) 
        b[i] = book[i].title;
    return b;
};

// Do not edit below this line
module.exports = getTheTitles;
