import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png'

import style from './Navbar.module.css';

export default function NavBar() {
    return (
        <header className={style.navbar}>
            <div>
                <h2 className={style.text_white}>App Filmes</h2>
            </div>
            <nav>
                <ul className={style.list}>
                    <li className={style.list_item}>
                        <NavLink exact to="/filmes_app" className={style.nave}>Home</NavLink>
                        <NavLink to="/favs" className={style.nave}>Favoritas</NavLink>
                    </li>
                </ul>
            </nav>
        </header> 
    )
}