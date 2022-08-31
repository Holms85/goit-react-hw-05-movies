import { NavLink } from 'react-router-dom';
import items from './items';
import s from '../Menu/Menu.module.css';

export default function Menu() {
  const getClassName = ({ isActive }) => {
    return isActive ? `${s.link} ${s.active}` : s.link;
  };

  const element = items.map(({ id, to, text }) => (
    <li className={s.menuItem} key={id}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <div className="menuWrapper">
      <ul className={s.menuList}>{element}</ul>
    </div>
  );
}
