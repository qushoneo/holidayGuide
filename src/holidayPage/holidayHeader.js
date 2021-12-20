import style from '../style.module.scss';
import styleSearch from '../search/style.module.scss';
import logo from '../assets/logo.svg';
import arrow from '../assets/arrow_down.svg';
import { useState } from 'react';
import SearchBox from '../search/searchBox';

const HolidayHeader = ({ searchVisiblity, setSearchVisiblity }) => {
  return (
    <div className={style.holidayHeader}>
      <div className={style.holidayBrand}>
        <img className={style.holidayLogo} src={logo} alt=''></img>
        <span>Holiday Guide</span>
      </div>
      <div className={style.holidayActionLink}>
        <div className={style.holidayHeaderSearch}>
          <span onClick={() => setSearchVisiblity(!searchVisiblity)}>
            SEARCH
          </span>
        </div>
        <div className={style.holidayChangeLang}>
          <span>EN</span>
          <img src={arrow} alt=''></img>
        </div>
        <div className={style.holidayHeaderMenu}>
          <span>MENU</span>
        </div>
      </div>
    </div>
  );
};

export default HolidayHeader;
