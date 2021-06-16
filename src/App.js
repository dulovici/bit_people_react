import './App.css';
import { useEffect, useState } from 'react';
import {Loading} from './Loading/Loading';
import { Header } from './Header/Header';
import { UserPage } from './User_Page/UserPage';

function App() {

  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [src, setSrc] = useState('');

  const [refresh, setRefresh] = useState();
  const [isActive, setIsActive] = useState(true);


  useEffect(() => {
    setUsers([]);
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(dta => {
        setTimeout(() => {
          setUsers(dta.results);
          setFiltered(dta.results);
        }, 200);
      })
  }, [refresh])


  useEffect(() => {
    setFiltered(users.filter(e => (
      e.name.first.toLowerCase().includes(src.toLowerCase()) ||
      e.name.last.toLowerCase().includes(src.toLowerCase())
    )))
  }, [src, users])


  return (
    <>
      <Header refresh={setRefresh} setClass={() => setIsActive(!isActive)} isActive={isActive}/>
      {users.length?<UserPage users={filtered} inputVal={(arg) => setSrc(arg)} gridClass={isActive}/>: <Loading />}
    </>
  )
}

export default App;



//NAPRAVI GRID VERZIJU

