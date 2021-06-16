import '../User_Page/userPage.css';
import { User } from '../User/User';

export const UserPage = (props) => {
    const { users } = props;
    const { inputVal } = props;
    const { gridClass } = props;


    const male = users.filter(i => i.gender === 'male').length;
    const female = users.length - male;

    return (
        <div className="wraper">
            <input type='text' className='src' placeholder='Search users...' onChange={(e) => { inputVal(e.target.value) }} />
            <p>Male:{male} Female:{female}</p>
            <div className={`users ${gridClass ? 'users-grid' : ''}`}>
                {users.map(e => {
                    return <User key={e.cell} single={e} gender={e.gender} gridClass={gridClass} />
                })}
            </div>
        </div>
    )
}
