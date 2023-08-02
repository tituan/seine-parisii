import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Dropdown = () => {

    const [isOpen, setOpen] = useState(false);

    const toggleClass = () => {
        setOpen(!isOpen);
    };

    return (
        <div className="nav__links__dropdown">
            <p className="nav__links__dropdown__title" onClick={toggleClass}>
                Découvrir les résidences
                <span className="nav__links__dropdown__title__arrow"></span>
            </p>
            <ul className={`nav__links__dropdown__list ${isOpen ? 'active-list' : ''}`}>
                <NavLink to="/" className="nav__links__dropdown__list__link">
                    Résidence 1
                </NavLink>
                <NavLink to="/" className="nav__links__dropdown__list__link">
                    Résidence 2
                </NavLink>
                <NavLink to="/" className="nav__links__dropdown__list__link">
                    Résidence 3
                </NavLink>
            </ul>
        </div>
    );
};

export default Dropdown;