import { LongTxt } from "../cmps/long-txt.jsx"
import { utilService } from "../services/util.service.js"
import { bookService } from "../services/book.service.js"

const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM
const { Link, NavLink, Outlet } = ReactRouterDOM


export function BookDetails() {
    const [book, setBook] = useState(null)
    const [nextBookId, setNextBookId] = useState(null)
    const [prevBookId, setPrevBookId] = useState(null)
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadBook()
        loadNextBookId()
        loadPrevBookId()
    }, [params.bookId])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBook)
            .catch(err => {
                console.log('Had issued in book details:', err);
                navigate('/book')
            })
    }

    function loadNextBookId() {
        bookService.getNextBookId(params.bookId)
            .then(setNextBookId)
    }

    function loadPrevBookId() {
        bookService.getPrevBookId(params.bookId)
            .then(setPrevBookId)
    }


    function onBack() {
        navigate('/book')
        // navigate(-1)
    }

    if (!book) return <div>Loading...</div>
    let priceClass = ''
    if (book.listPrice.amount > 150) priceClass = 'red'
    if (book.listPrice.amount < 20) priceClass = 'green'

    return (
        <section className="book-details">
            <h1>Book title: {book.title}</h1>
            {book.listPrice.isOnSale && <h3 className="on-sale">on sale!</h3>}
            <h5 className={priceClass}>Book price: {book.listPrice.amount} {utilService.currencyToSymbol(book.listPrice.currencyCode)}</h5>
            <h5>{_pageCountToText(book.pageCount)}
                {_pageCountToText(book.pageCount) && _publishedDateToText(book.publishedDate) && ' | '}
                {_publishedDateToText(book.publishedDate)}</h5>
            <img src={book.thumbnail} alt="" />
            <LongTxt txt={book.description} length={100} />
            <button onClick={onBack}>Back</button>
            <button><Link to={`/book/${params.bookId}/review`} >Add a review</Link></button>
            <button><Link to={`/book/${nextBookId}`}>Next book</Link></button>
            <button><Link to={`/book/${prevBookId}`}>Prev Book</Link></button>
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
{/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit reiciendis sed optio eum saepe! Aliquid necessitatibus atque est quasi unde odit voluptate! Vero, dolor sunt molestiae possimus labore suscipit?</p> */ }
