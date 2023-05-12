import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";

const Hat = () => {
    return (
        <div
            // className="wrapper"
        >
            <div className="main">
                <div className="container">
                    <div className="main_info">
                        <h1 className="main_title">Прокат горных велосипедов VELIK</h1>
                        <div className="main_text">Сегодня велосипед — излюбленное транспортное средство для многих
                            людей.
                            Езду на велосипеде можно легко сделать частью своей повседневной жизни. Наш сервис поможет
                            выбрать велосипед именно для Вас.

                        </div>
                        <div className="main_action">
                            <AnchorLink href='#cars'><button className="button" id="main_action">Посмотреть велосипеды</button></AnchorLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hat;