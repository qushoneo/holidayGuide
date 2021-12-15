import style from '../style.module.scss';
import logo from '../assets/logo.svg';
import arrow from '../assets/arrow_down.svg';

const HolidayHeader = () => {
  return (
    <div className={style.holidayHeader}>
      <div className={style.holidayBrand}>
        <img className={style.holidayLogo} src={logo}></img>
        <span>Holiday Guide</span>
      </div>
      <div className={style.holidayActionLink}>
        <div className={style.holidayChangeLang}>
          <span>EN</span>
          <img src={arrow}></img>
        </div>
        <div className={style.holidayMenu}>MENU</div>
      </div>
    </div>
  );
};

export default HolidayHeader;
