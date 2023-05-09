const { useState } = React

export function LongTxt({ txt, length = 50 }) {

    const [isLongTxtShown, setIsLongTxtShown] = useState(false)

    function toggleIsLongTxtShown() {
        setIsLongTxtShown(!isLongTxtShown)
    }

    return <p className="long-txt">
        {isLongTxtShown && txt}
        {!isLongTxtShown && txt.length > length ? txt.substring(0, length) + '...' : txt}
        {txt.length > length && (
            <button onClick={toggleIsLongTxtShown}>
                {isLongTxtShown ? 'Less' : 'More'}
            </button>
        )}
    </p>
}