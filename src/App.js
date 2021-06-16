import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './Header/Header';
import { UserPage } from './User_Page/UserPage';

function App() {

  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [src, setSrc] = useState('');

  const [refresh, setRefresh] = useState();
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    fetch('https://randomuser.me/api/?results=15')
      .then(res => res.json())
      .then(dta => {
        setUsers(dta.results);
        setFiltered(dta.results);
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
      <Header refresh={setRefresh} setClass={() => setIsActive(!isActive)} />
      <UserPage users={filtered} inputVal={(arg) => setSrc(arg)} gridClass={isActive} />
    </>
  )
}

export default App;



//NAPRAVI GRID VERZIJU