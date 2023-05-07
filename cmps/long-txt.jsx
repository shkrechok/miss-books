const {useState} = React

export function LongTxt({txt}){

    const [isLongTxtShown, setIsLongTxtShown] = useState(false)

    function toggleIsLongTxtShown(){
        setIsLongTxtShown(!isLongTxtShown)
    }

    return <p className="long-txt">
        {isLongTxtShown && txt}
        {!isLongTxtShown && txt.substring(0, 50) + '...'}
        <button onClick={toggleIsLongTxtShown}>{isLongTxtShown ? 'Less' : 'More'}</button>
    </p>
}