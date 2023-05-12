import React, {useRef, useState} from 'react';
import Bike from "./Bike";
import img1 from '../images/1.png';
import img2 from '../images/2.png';
import img3 from '../images/3.png';
import img4 from '../images/4.png';
import img5 from '../images/5.png';
import img6 from '../images/6.png';
import rolls from "../images/rolls.png";


const BikeList = () => {

    const ref = useRef(null);

    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [vel, setVel] = useState('');

    function changeName(event) {
        setName(event.target.value);
    }

    function changeTel(event) {
        setTel(event.target.value);
    }

    function myAlert(event) {

        alert('Уважаемый(ая) ' + name + ',\n' + 'Вы выбрали '+ vel + '\nМы свяжемся с Вами по телефону '+ tel +' в ближайшее время.')
    }

    const remove = (value) => {
        setVel(value)
    };

    const bikes = [
        {foto: img1, title: "Велосипед горный Carbon", view: "Хардтейл", type: "Кросс-кантри", age: "Взрослый"},
        {foto: img2, title: "Велосипед горный BMX", view: "Ригид", type: "Фрирайд", age: "Взрослый"},
        {foto: img3, title: "Велосипед горный California", view: "Хардтейл", type: "Велотриал", age: "Взрослый"},
        {foto: img4, title: "Велосипед горный Boy", view: "Двухподвес", type: "Даунхилл", age: "Детский"},
        {foto: img5, title: "Велосипед горный Moterra", view: "Хардтейл", type: "Фрирайд", age: "Взрослый"},
        {foto: img6, title: "Велосипед горный Kross", view: "Двухподвес", type: "Кросс-кантри", age: "Взрослый"},
    ]

    return (
        <div
            // className="wrapper"
        >
            <div className="car" id="cars">
                <div className="container">
                    <h2 className="sub_title">Наш велопарк</h2>
                    <div className="car_items">
                        {bikes.map((bike, index) =>
                            <Bike remove={remove} bike={bike} foto={bike.foto} title={bike.title} view={bike.view} type={bike.type}
                                  age={bike.age} key={index}/>
                        )}
                    </div>
                </div>
            </div>
            <div className="price" id="price" ref={ref}>
                <div className="container">
                    <h2 className="sub_title">Узнать цену и забронировать</h2>
                    <div className="price_text">
                        Заполните данные, и мы перезвоним вам для уточнения всех деталей бронирования
                    </div>
                    <form action="" className="price_form">
                        <input onChange={changeName} type="text" className="price_input" id="name"
                               placeholder="Ваше имя"/>
                        <input onChange={changeTel} type="text" className="price_input" id="phone"
                               placeholder="Ваш телефон"/>
                        <input disabled={true} type="text" className="price_input" id="car"
                               placeholder="Велосипед, который вас интересует" value={vel}/>
                        <button onClick={myAlert} className="button" type="button" id="price_action">Узнать цену и забронировать</button>
                    </form>
                    <img src={rolls} alt="rolls" className="price_image"/>
                </div>
            </div>
        </div>
    );
};

export default BikeList;