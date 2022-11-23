"use strict"

const bookList = [
{
    id: 1,
    author: "charles Dickens",
    title: "Oliver Twist"
},
{
    id: 2,
    author: "William shakespear",
    title: "hamlet"
}
];

/*searchField.addEventListener("keyup",(e) => searchBooks(e.target.value));*/
searchField.addEventListener("keyup",(e) =>
 renderBookList(
    bookList.filter(({title, author}) =>  {
    const seachTerm = e.target.value.toLowerCase();
    return title.toLowerCase().indexOf(seachTerm) >= 0 || author.toLowerCase().indexOf(seachTerm) >= 0;
    })
    )
);

function renderBookList(bookList) {
    /*element i Html-listan visas/döljs beronde på listans innehåll */

const existingElement = document.querySelector(".book-list");
console.log(existingElement);

const root = document.getElementById("root");
if(existingElement){
    root.removeChild(existingElement);
}
if(bookList.length > 0){
root.insertAdjacentHTML("beforeend",BookList(bookList));
}


}

