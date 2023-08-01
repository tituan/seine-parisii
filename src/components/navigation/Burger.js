import React, { useState }from 'react';

const Burger = ({ handleBurgerClick }) => {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        handleBurgerClick();
    };

    return (
        <div className={`burger ${isActive ? 'burger-active' : ''}`} onClick={toggleClass}>
            <span className="burger__bar"></span>
            <span className="burger__bar"></span>
            <span className="burger__bar"></span>
        </div>
    );
};

export default Burger;