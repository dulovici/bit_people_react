import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './Header/Header';
import { UserPage } from './User_Page/UserPage';

function App() {

  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [src, setSrc] = useState('');
  const [refresh, setRefresh] = useState();
  

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
  }, [src])


  return (
    <>
      <Header refresh={setRefresh} />
      <UserPage users={filtered} inputVal={(arg) => setSrc(arg)} />
    </>
  )
}

export default App;
