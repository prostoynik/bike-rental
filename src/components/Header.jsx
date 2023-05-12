import React, {useEffect, useState} from 'react';
import logo from "../images/logo.png";
import Auth from "./Auth";

const Header = (props) => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        validateToken();
    }, []);

    function changeUser(event) {
        setUser(event.target.value);
    }

    function changePass(event) {
        setPass(event.target.value);
    }

    function handleSubmit() {

        const url = 'https://sf-final-project-be.herokuapp.com/api/auth/sign_in';
        const myObject = {
            "email": user,//"lelena_2010@mail.ru",
            "password": pass//"ESku1003!"
        };


        fetch(url, {
            method: 'POST',
            body: JSON.stringify(myObject),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                if (data.status = 'ОК') {
                    console.log(data);
                    if (data.hasOwnProperty('errCode')) {
                        alert(data.message)
                    } else {
                        localStorage.setItem('token', data.data.token);
                        window.location.href = "/";
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleExit() {
        localStorage.setItem('token', '')
        window.location.href = "/";
    }

    function validateToken() {
        const url = 'https://sf-final-project-be.herokuapp.com/api/auth/';

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Auth
            }
        }).then(response => response.json())
            .then(data => {
                if (data.hasOwnProperty('data')) {
                    localStorage.setItem('token', data.data.token);
                } else {
                    localStorage.setItem('token','')
                }
            })
            .catch(err => {
                localStorage.setItem('token','')
                console.log(err);
            });
    }

    return (
        <div
            // className="wrapper"
        >
            <main className="header">
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <nav className="menu">
                        <ul>
                            <li className="menu_item">
                                <a href="#contacts"><strong>Контакты:</strong></a><br/>
                                <a className="navigation_tel" id="tel" href="tel:+7 (928) 000-000"><strong>+7 (928)
                                    000-000</strong></a>
                            </li>


                            <li className="menu_item gorVel">
                                <a href="#cars"><strong>Горные велосипеды</strong></a>
                            </li>
                            <li className="menu_item gorVel">
                                <a href="#price"><strong>Бронирование велосипедов</strong></a>
                            </li>
                            <li>

                                {(localStorage.getItem('token') === '')
                                    ?
                                    <div className="form">
                                        <h4 className="auth">Авторизация</h4>
                                        <input value={user} onChange={changeUser} type="text" placeholder="Логин"/>
                                        <input value={pass} onChange={changePass} type="password" placeholder="Пароль"/>
                                        <a className="forgot-p" href="#requestpass">Забыли пароль?</a>
                                        <button className="form-btn" onClick={handleSubmit}>Войти</button>
                                        {Auth ? <a href="/responsibleList">Регистрация</a> : <div/>}
                                    </div>
                                    :
                                    <div className="form">
                                        <button className="form-btn" onClick={handleExit}>Выйти</button>
                                        {Auth ? <a href="/responsibleList">Регистрация</a> : <div/>}
                                    </div>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
        </div>

    );
};

export default Header;