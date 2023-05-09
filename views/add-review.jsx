const { useParams, useNavigate } = ReactRouterDOM
const { useState } = React


export function AddReview (){
    const [addReview, setAddreview] = useState(null)
    const params = useParams()


    function onBack() {
        navigate((`/book/${params.bookId}`))
    }
   
    return (
        <section className="book-addReview">
            Add review section

        </section>
    )
}