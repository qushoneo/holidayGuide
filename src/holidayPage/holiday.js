import style from '../style.module.scss';
import hotel from '../assets/hotel_photo.jpg';
import searchBox from '../search/searchBox';

const HolidayMainPage = () => {
  return (
    <div className={style.holidayMainPage}>
      <div className={style.holidayMessageBlock}>
        <span className={style.holidayMainPageWelcomingMsg}>
          Welcome to your holiday home
        </span>
      </div>
      <div className={style.holidayPictureBox}>
        <img className={style.holidayHotelPhoto} src={hotel}></img>
      </div>
      <div>text</div>
    </div>
  );
};

export default HolidayMainPage;
