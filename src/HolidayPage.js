import styles from './style.module.scss';
import HolidayHeader from './holidayPage/holidayHeader.js';
import HolidayMainPage from './holidayPage/holiday';

const HolidayPage = () => {
  return (
    <div className={styles.holidayPage}>
      <HolidayHeader></HolidayHeader>
      <HolidayMainPage></HolidayMainPage>
    </div>
  );
};

export default HolidayPage;
