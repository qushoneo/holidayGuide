import { useState } from 'react';
import Input from './input';
import style from './style.module.scss';

const SearchBox = ({ searchVisiblity, setSearchVisiblity }) => {
  return (
    <div className={searchVisiblity}>
      <Input placeholder={'City or region'}></Input>
      <Input placeholder={'Dates'}></Input>
      <div className={style.cityAndRegion}>
        <Input placeholder={'Bedrooms'}></Input>
        <Input placeholder={'Persons'}></Input>
      </div>
      <div className={style.flexCheckbox}>
        <input name='flexible' type={'checkbox'} />
        <label for='flexible'>Flexible dates +3/-3 days</label>
      </div>
      <div className={style.buttonSearch}>
        <button onClick={() => setSearchVisiblity(!searchVisiblity)}>
          SEARCH 1000 HOMES
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
