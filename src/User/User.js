import '../User/user.css';

export const User = (props) => {
    const { single } = props;
    const { gender } = props;

    const date = new Date(single.dob.date);

    return (
        <div className={gender === 'female' ? 'card female' : 'card'} >
            <img src={single.picture.thumbnail} alt='img' />
            <div className='char-info'>
                <p>Name: {`${single.name.first} ${single.name.last}`} </p>
                <p>Email: {single.email} </p>
                <p>DoB: {date.getDate()}.{date.getMonth()}.{date.getFullYear()} </p>
            </div>

        </div >
    )
}