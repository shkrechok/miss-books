import { bookService } from "../services/book.service.js"

const { useState, useEffect } = React

export function BookFilter({ filterBy, onSetFilter }) {
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)


    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        setFilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    
    const { txt, maxPrice } = filterByToEdit
    return (
        <section className="book-filter">
            <h2>Filter the books</h2>

            <form onSubmit={onSubmitFilter}>
                <label htmlFor="txt">Title:</label>
                <input value={txt} onChange={handleChange} name="txt" id="txt" type="text" placeholder="By title" />

                <label htmlFor="maxPrice">Max price:</label>
                <input value={maxPrice} onChange={handleChange} type="number" min={0} name="maxPrice" id="maxPrice" placeholder="By max price" />

                <button className="filter-btn">Filter books</button>
            </form>

        </section>
    )
}