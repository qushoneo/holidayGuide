import style from '../style.module.scss';
import hotel from '../assets/photo.png';
import SearchBox from '../search/searchBox';
import styleSearch from '../search/style.module.scss';

const HolidayMainPage = ({ searchVisiblity, setSearchVisiblity }) => {
  return (
    <div className={style.holidayMainPage}>
      <div className={style.holidayMessageBlock}>
        <span className={style.holidayMainPageWelcomingMsg}>
          Welcome to your holiday home
        </span>
        <div className={style.holidaySearchBlock}>
          <SearchBox
            searchVisiblity={`${styleSearch.styleSearchWindow} ${
              searchVisiblity ? styleSearch.open : ''
            }`}
            setSearchVisiblity={setSearchVisiblity}
          ></SearchBox>
        </div>
      </div>
      <div className={style.holidayPictureBox}>
        <img className={style.holidayHotelPhoto} alt='' src={hotel}></img>
      </div>
      <div>text</div>
    </div>
  );
};

export default HolidayMainPage;
