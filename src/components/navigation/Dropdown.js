import React from 'react';
import { NavLink } from "react-router-dom";

const Dropdown = () => {
    return (
        <div className="nav__links__dropdown">
            <p className="nav__links__dropdown__title">Découvrir les résidences</p>
            <ul className="nav__links__dropdown__list">
                <NavLink to="/" className={(nav) => (nav.isActive) ? "nav-active" : ""}>
                    Résidence 1
                </NavLink>
                <NavLink to="/" className={(nav) => (nav.isActive) ? "nav-active" : ""}>
                    Résidence 2
                </NavLink>
                <NavLink to="/" className={(nav) => (nav.isActive) ? "nav-active" : ""}>
                    Résidence 3
                </NavLink>
            </ul>
        </div>
    );
};

export default Dropdown;