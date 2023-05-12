import React from 'react';
import logo from "../images/logo.png";
import Auth from "./Auth";

const Footer = () => {
    return (

            <footer className="footer">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="theft">
                        {Auth?<a href="/theftReport">Список всех краж</a>:<div/>}
                        <a href="/theft">Сообщить о краже велосипеда</a>
                    </div>
                </div>
            </footer>

    );
};

export default Footer;