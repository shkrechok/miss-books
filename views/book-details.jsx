import { utilService } from "../services/util.service.js"

export function BookDetails({ book, onBack }) {
     
    let priceClass = ''
    if (book.listPrice.amount > 150) priceClass = 'red'
    if (book.listPrice.amount < 20) priceClass = 'green'
    
    return (
        <section className="book-details">
            <h1>Book title: {book.title}</h1>
            {book.listPrice.isOnSale && <h3 className="on-sale">on sale!</h3>}
            <h5 className={priceClass}>Book price: {book.listPrice.amount} {utilService.currencyToSymbol(book.listPrice.currencyCode)}</h5>
            <h5>{_pageCountToText(book.pageCount)} | {_publishedDateToText(book.publishedDate)}</h5>
            <img src={book.thumbnail} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit reiciendis sed optio eum saepe! Aliquid necessitatibus atque est quasi unde odit voluptate! Vero, dolor sunt molestiae possimus labore suscipit?</p>
            <button onClick={onBack}>Back</button>
        </section>
    )

}

function _pageCountToText(pageCount) {
    if (pageCount > 500) return 'Long reading'
    if (pageCount > 200) return 'Decent reading'
    if (pageCount < 100) return 'Light reading'
}

function _publishedDateToText(publishedDate) {
    const currYear = new Date().getFullYear()
    if (currYear - publishedDate > 10) return 'Vintage'
    if (currYear - publishedDate < 1) return 'New'
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
   