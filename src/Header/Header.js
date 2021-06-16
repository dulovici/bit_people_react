import '../Header/header.css'



export const Header = (props) => {
    const { refresh } = props;
    const { setClass } = props;
    const {isActive} = props;



    return (
        <div className="header">
            <h1>BIT People</h1>
            <div className="buttons">
                <h2 onClick={refresh} className='grid'>Show more</h2>
                <h2 onClick={setClass}>{isActive?'=':'#'}</h2>
            </div>
        </div>
    )
}