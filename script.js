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
const searchInput = null;

function handleKeyPress(input){
    /*ta emot/läsa av värder i inputfältet.
    Skicka värdet till searchbooks
    search books reunerar en filtrerad lista
    Filtrerade listan skickas til renderBookList  */
    searchBooks(input);
}

function searchBooks(seachTerm){
    /* loopa igenom Booklist
       För varje varv i loopem, ta det akuella elementet (boken)
       Jämför titeln med söktermen
       om söktärmen finns någonstans i titelm, lägg till elementet i ny lista (filterdList)
       Returnera filterLiset eller anropar renderBookList*/
       const filterdList = [];
       for(let i = 0; i < bookList.length; i++){
        const title = bookList[i].title.toLowerCase();
        if(title.indexOf(seachTerm.toLowerCase()) >= 0) {
            filterdList.push(bookList[i]);
        }
       }
       renderBookList(filterdList);
    
}

function renderBookList(list) {
    /*element i Html-listan visas/döljs beronde på listans innehåll */
    console.log(list);
}

