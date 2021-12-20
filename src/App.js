import { useState } from 'react';
import './App.css';
import HolidayPage from './holidayPage/holiday';
import Header from './holidayPage/holidayHeader';
import style from './style.module.scss';

function App() {
  const [searchVisiblity, setSearchVisiblity] = useState(false);
  return (
    <div className={style.holidayPage}>
      <Header
        searchVisiblity={searchVisiblity}
        setSearchVisiblity={setSearchVisiblity}
      ></Header>
      <HolidayPage
        searchVisiblity={searchVisiblity}
        setSearchVisiblity={setSearchVisiblity}
      ></HolidayPage>
    </div>
  );
}

export default App;
