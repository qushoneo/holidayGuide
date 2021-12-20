import style from './style.module.scss';

const Input = ({ placeholder }) => {
  return <input placeholder={placeholder} className={style.input}></input>;
};

export default Input;
