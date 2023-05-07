import { utilService } from "../services/util.service.js";

export function BookPreview({ book }) {
    
    return (
        <article className="book-preview">
            <h2>Book title: {book.title}</h2>
            <h4>Book price: {book.listPrice.amount} {utilService.currencyToSymbol(book.listPrice.currencyCode)}</h4>
            <img src={book.thumbnail} alt="" />
        </article>
    )
}


// {
//     "id": "OXeMG8wNskc",
//     "title": "metus hendrerit",
//     "subtitle": "mi est eros dapibus himenaeos",
//     "authors": [ "Barbara Cartland" ],
//     "publishedDate": 1999,
//     "description": "placerat nisi sodales suscipit tellus",
//     "pageCount": 713,
//     "categories": [ "Computers", "Hack" ],
//     "thumbnail": "http://ca.org/books-photos/20.jpg",
//     "language": "en",
//     "listPrice": { 
//     "amount": 109,
//     "currencyCode": "EUR",
//     "isOnSale": false
//     }
   