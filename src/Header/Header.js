import '../Header/header.css'



export const Header = (props) => {
    const { refresh } = props;
    const { setClass } = props;



    return (
        <div className="header">
            <h1>BIT People</h1>
            <div className="buttons">
                <h2 onClick={refresh}>🗘</h2>
                <h2 onClick={setClass}>#</h2>
            </div>
        </div>
    )
}