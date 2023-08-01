import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import LogoCopro from './LogoCopro';
import Burger from './Burger';
import Dropdown from './Dropdown';

const Navigation = () => {

    const [burgerOpen, setBurgerOpen] = useState(false); 

    const handleBurgerClick = () => {
        setBurgerOpen((prevState) => !prevState);
    };

    return (
        <div className="nav">
            <div className="nav__container">
                <LogoCopro />
                <Burger handleBurgerClick={handleBurgerClick}/>
                <div className={`nav__links ${burgerOpen ? 'nav__links--open' : ''}`}>
                    <Dropdown />
                    <NavLink to="/" className="nav__links__btn">
                        Visiter votre futur quartier
                    </NavLink>
                    <NavLink to="/" className="nav__links__btn">
                        Vivre à Cormeilles-en-Parisis
                    </NavLink>
                    <NavLink to="/" className="nav__links__btn">
                        Suivre les actus
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navigation;