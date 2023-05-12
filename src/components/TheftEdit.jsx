import React, {useEffect, useState} from 'react';
import {useMatch} from "react-router-dom";
import Auth from "./Auth";
import moment from "moment";

const TheftEdit = (props) => {

    const [lic, setLic] = useState('');
    const [fio, setFio] = useState('');
    const [tip, setTip] = useState('');
    const [color, setColor] = useState('');
    const [date, setDate] = useState(null);
    const [info, setInfo] = useState('');
    const [user, setUser] = useState('');
    const [status, setStatus] = useState('');
    const match = useMatch("theft/:id");
    const {id} = match.params;

    useEffect(() => {
        theft();
    }, []);

    // const mydate = () => {
    //     let d='15.03.1999';
    //     return d;
    // }

    const theft = () => {

        const url = 'https://sf-final-project-be.herokuapp.com/api/cases/' + id;

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Auth
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                setStatus(data.data.status);
                setLic(data.data.licenseNumber);
                setFio(data.data.ownerFullName);
                setTip(data.data.type);
                setUser(data.data.officer);
                setColor(data.data.color);
                setDate(moment(data.data.date).utc().format('YYYY-MM-DD'));
                setInfo(data.data.description);
                console.log(date)
            })
            .catch(err => {
                console.log(err);
            });
        console.log(lic)
    }

    function handleSubmit() {

        const url = 'https://sf-final-project-be.herokuapp.com/api/cases/' + id;
        console.log(fio);
        console.log(color);
        console.log(info);
        const myObject = {
            "ownerFullName": fio,
            "licenseNumber": lic,
            "type": tip,
            "status": status,
            "color": color,
            "date": date,
            "officer": user,
            "description": info
        };

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(myObject),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Auth
            }
        }).then(response => response.json())
            .then(data => {
                window.location.href = "/theftReport"
            })
            .catch(err => {
                console.log(err);
            });
    }

    function changeLic(event) {
        setLic(event.target.value);
    }

    function changeFio(event) {
        setFio(event.target.value);
    }

    function changeTip(event) {
        setTip(event.target.value);
    }

    function changeColor(event) {
        setColor(event.target.value);
    }

    function changeDate(event) {
        setDate(event.target.value);
    }

    function changeInfo(event) {
        setInfo(event.target.value);
    }

    function changeUser(event) {
        setUser(event.target.value);
    }

    return (
        <div className="wrapper">
            <div className="price" id="price">
                <div className="container">
                    <h2 className="sub_title">Информация о краже</h2>
                    <form action="" className="price_form">
                        <h6>Номер лицензии</h6>
                        <input onChange={changeLic} type="text" className="price_input" id="name"
                               placeholder="Номер лицензии"
                               value={lic}
                        />
                        <h6>ФИО клиента</h6>
                        <input onChange={changeFio} type="text" className="price_input" id="name"
                               placeholder="ФИО клиента"
                               value={fio}
                        />
                        <h6>Тип велосипеда</h6>
                        <select onChange={changeTip}
                                className="price_input"
                                value={tip}
                        >
                            <option value="">Тип велосипеда (выберите из списка)</option>
                            <option value="sport">Спортивный</option>
                            <option value="general">Стандартный</option>
                        </select>
                        <h6>Цвет велосипеда</h6>
                        <input onChange={changeColor} type="text" className="price_input" id="car"
                               placeholder="Цвет велосипеда"
                               value={color}
                        />
                        <h6>Дата кражи</h6>
                        <input onChange={changeDate} type="date" className="price_input" id="car"
                               placeholder="Дата кражи"
                               value={date}
                        />
                        <h6>Дополнительная информация</h6>
                        <input onChange={changeInfo} type="text" className="price_input" id="car"
                               placeholder="Дополнительная информация"
                               value={info}
                        />
                        <h6>Ответственный сотрудник (редактировать поле нельзя)</h6>
                        <input onChange={changeUser} type="text" className="price_input" id="car"
                               placeholder="Ответственный сотрудник"
                               value={user}
                        />
                        <button className="button" type="button" id="price_action"
                                onClick={handleSubmit}
                        >Сохранить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TheftEdit;