import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Navbar = (props) => {
    let friendsElements = props.state.friends.map((friendObj) =>
        (<Friend
            id={friendObj.id}
            name={friendObj.name}
            image={friendObj.image}
        />)
    );

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div style={{marginTop: '50px', color: 'white'}}>
                <div style={{fontSize: '24px', textAlign: "center", marginBottom: '10px'}}>
                    Friends
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                    {friendsElements}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;