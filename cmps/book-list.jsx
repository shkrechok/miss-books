import { BookPreview } from "./book-preview.jsx";



export function BookList({ books, onRemoveBook, onSelectBook }) {
    return (
        <ul className="book-list grid">
            {books.map(book =>
                <li key={book.id}>
                    <BookPreview book={book} />
                    <section>
                        <button onClick={() => onRemoveBook(book.id)} >Remove Book</button>
                        <button onClick={() => onSelectBook(book)} >Select</button>
                    </section>
                </li>
            )}
        </ul>
    )
}