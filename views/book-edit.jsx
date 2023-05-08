const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

import { bookService } from "../services/book.service.js"

export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const navigate = useNavigate()
    const params = useParams()

    console.log('bookToEdit:', bookToEdit)

    useEffect(() => {
        if (params.bookId) loadBook()
    }, [])

    function loadBook() {
        bookService.get(params.bookId)
            .then(setBookToEdit)
            .catch(err => {
                console.log('Had issued in book edit:', err);
                navigate('/book')
            })
    }

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        if (field === "listPrice") {
            // If field is "listPrice", update the nested property
            setBookToEdit((prevBook) => ({ ...prevBook, listPrice: { ...prevBook.listPrice, amount: value } }))
        } else {
            setBookToEdit(prevBook => ({ ...prevBook, [field]: value }))
        }
    }

    function onSaveBook(ev) {
        ev.preventDefault()
        bookService.save(bookToEdit)
            .then(() => {
                navigate('/book')
            })
    }

    function onBack() {
        navigate('/book')
    }
    // const { title, listPrice: {amount} } = bookToEdit
    if (!bookToEdit) return <div>Loading...</div>
    return (
        <section className="book-edit">
            <h2>{bookToEdit.id ? 'Edit' : 'Add'} Book</h2>

            <form onSubmit={onSaveBook} >
                <label htmlFor="title">Title:</label>
                <input onChange={handleChange} value={bookToEdit.title} type="text" name="title" id="title" />

                <label >Price:</label>
                <input onChange={handleChange} value={bookToEdit.listPrice.amount} type="number" name="listPrice" />
                <section className="book-edit-btns">
                    <button>{bookToEdit.id ? 'Save' : 'Add'}</button>
                    <button onClick={onBack}>Back</button>
                </section>

            </form>

        </section>
    )
}