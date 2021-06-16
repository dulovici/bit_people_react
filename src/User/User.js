import '../User/user.css';

export const User = (props) => {
    const { single } = props;
    const { gender } = props;
    const { gridClass } = props;


    const classGender = gender === 'female' ? 'female' : '';
    const classGrid = gridClass ? 'card-grid' : '';

    const date = new Date(single.dob.date);



    return (
        <div className={`card ${classGender} ${classGrid}`} >
            <img className={gridClass ? 'img img-grid' : 'img'} src={single.picture.large} alt='img' />
            <div className='char-info' >
                <p><strong>Name: {`${single.name.first} ${single.name.last}`}</strong></p>
                <p>Email: {single.email} </p>
                <p>DoB: {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()} </p>
            </div>
        </div >
    )
}