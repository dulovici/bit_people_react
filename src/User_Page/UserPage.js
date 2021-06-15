import '../User_Page/userPage.css';
import { User } from '../User/User';

export const UserPage = (props) => {
    const { users } = props;
    const male = users.filter(i => i.gender === 'male').length;
    const female = users.length - male;

    const srchUsers = (e) => {
        props.inputVal(e.target.value)

    }

    return (
        <div className="wraper">
            <input type='text' className='src' placeholder='Search users...' onChange={srchUsers}></input>
            <p>Male:{male} Female:{female}</p>
            <div className='users'>
                {users.map(e => {
                    return <User key={e.cell} single={e} gender={e.gender} />
                })}
            </div>
        </div>
    )
}