import React from 'react';
import join from '../images/join.png';


const Reg = () => {
    return (
        <div
            // className="wrapper"
        >
            <div className="price" id="price">
                <div className="container">
                    <h2 className="sub_title">Регистрация на сервисе</h2>
                    <div className="price_text">
                        Заполните поля для регистрации
                    </div>
                    <form action="" className="price_form">
                        <input type="text" className="price_input" id="name" placeholder="E-mail"/>
                        <input type="text" className="price_input" id="name" placeholder="Пароль"/>
                        <input type="text" className="price_input" id="phone" placeholder="Имя"/>
                        <input type="text" className="price_input" id="car" placeholder="Фамилия"/>
                        <input type="text" className="price_input" id="car" placeholder="Client ID"/>
                        <button className="button" type="button"
                                id="price_action">Зарегистрироваться
                        </button>
                    </form>
                    <img src={join} alt="join" className="price_image"/>
                </div>
            </div>
        </div>

    );
};

export default Reg;