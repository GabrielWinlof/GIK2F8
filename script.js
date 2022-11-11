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
/* const searchInput = document.children[0].children[1].children[1].children[1]; */


searchField.addEventListener("keyup", handleKeyPress);

function handleKeyPress(e){
    /*ta emot/läsa av värder i inputfältet.
    Skicka värdet till searchbooks
    search books reunerar en filtrerad lista
    Filtrerade listan skickas til renderBookList  */
    searchBooks(e.target.value);
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

function renderBookList(bookList) {
    /*element i Html-listan visas/döljs beronde på listans innehåll */
    let html = `<ul class="book-list rounded-md border-2 border-red-400 bg-white w-full mx-auto">`
    for (let i = 0; i < bookList.length; i++){
       html += `<li
                        class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-red-900 last:border-b-0 border-b
                        border-red-700 cursor-pointer">
                    ${bookList[i].author} - ${bookList[i].title}
                    </li>`;

    }
    html += `</ul>`;


const existingElement = document.querySelector(".book-list");
console.log(existingElement);

const root = document.getElementById("root");
if(existingElement){
    root.removeChild(existingElement);
}
root.insertAdjacentHTML("beforeend",html)



}

