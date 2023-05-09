// const { useState } = React

const Router = ReactRouterDOM.HashRouter
const { Routes, Route } = ReactRouterDOM
const { Link, NavLink } = ReactRouterDOM

import { About } from "./views/about.jsx"
import { BookIndex } from "./views/book-index.jsx"
import { Home } from "./views/home.jsx"
import { BookDetails } from "./views/book-details.jsx"
import { BookEdit } from "./views/book-edit.jsx"
import { UserMsg } from "./cmps/user-msg.jsx"
import { AddReview } from "./views/add-review.jsx"


export function App() {

    // const [page, setPage] = useState('book')


    // function handlePageChange(page) {
    //     setPage(page)
    // }

    // todo: pass header to a separate cmp
    return (
        <Router>
            <section className="app main-layout">
                <header className="app-header full main-layout">
                    <h1>React Books</h1>
                    <nav className="app-nav">
                        <NavLink to="/" >Home</NavLink>
                        <NavLink to="/about" >About</NavLink>
                        <NavLink to="/book" >Books</NavLink>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/book/:bookId" element={<BookDetails />} />
                        <Route path="/book/:bookId/review" element={<AddReview />} />
                        <Route path="/book/edit/" element={<BookEdit />} />
                        <Route path="/book/edit/:bookId" element={<BookEdit />} />
                        <Route path="/book" element={<BookIndex />} />
                    </Routes>
                </main>
                <UserMsg />
            </section>
        </Router>
    )
}

