import {NavLink} from 'react-router-dom'
import s from '../Menu/Menu.module.css'

export default function Menu() {
    const getClassName = ({isActive}) => {
        
        return (isActive ? `${s.link} ${s.active}` : s.link);
    }
    return <div className="menuWrapper">
        <ul className={s.menuList}>
            <li className={s.menuItem}>
            <NavLink className={getClassName} to='/'>Home</NavLink>
            </li>
            <li className={s.menuItem}>
            <NavLink className={getClassName} to='/movies'>Movies</NavLink>
            </li>
</ul>
    </div>
};
