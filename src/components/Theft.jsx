import React, {useState, useEffect} from 'react';
import theftvelo from '../images/theftvelo.png';
import Auth from "./Auth";
import clientId from "./ClientId";

const Theft = () => {
    const [users, setUsers] = useState([]);
    const [lic, setLic] = useState('');
    const [fio, setFio] = useState('');
    const [tip, setTip] = useState('');
    const [color, setColor] = useState('');
    const [date, setDate] = useState(new Date());
    const [info, setInfo] = useState('');
    const [user, setUser] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {

        listUsers();
    }, []);

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

    function listUsers() {
        if (Auth) {

            const url = 'https://sf-final-project-be.herokuapp.com/api/officers';

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Auth
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    setUsers(data.officers);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    function handleSubmit() {
        const url = Auth ? 'https://sf-final-project-be.herokuapp.com/api/cases/' : 'https://sf-final-project-be.herokuapp.com/api/public/report';

        const myObject = {
            "ownerFullName": fio,
            "licenseNumber": lic,
            "type": tip,
            "color": color,
            "date": date,
            "officer": user,
            "description": info,
            "clientId": clientId
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(myObject),
            headers: {
                'Content-Type': 'application/json'
                , 'Authorization': 'Bearer ' + Auth
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status === 'ERR') setError(data.message)
                else window.location.href = "/"
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="wrapper">
            <div className="price" id="price">
                <div className="container">
                    <h2 className="sub_title">Сообщить о краже</h2>
                    <div className="price_text">
                        Заполните данные и мы свяжемся с Вами
                    </div>
                    <form action="" className="price_form">
                        <h6>Номер лицензии</h6>
                        <input onChange={changeLic} type="text" className="price_input" id="name"
                               placeholder="Номер лицензии"/>
                        <h6>ФИО клиента</h6>
                        <input onChange={changeFio} type="text" className="price_input" id="name"
                               placeholder="ФИО клиента"/>
                        <h6>Тип велосипеда</h6>
                        <select onChange={changeTip}
                                className="price_input"
                        >
                            <option value="">Тип велосипеда (выберите из списка)</option>
                            <option value="sport">Спортивный</option>
                            <option value="general">Стандартный</option>
                        </select>
                        <h6>Цвет велосипеда</h6>
                        <input onChange={changeColor} type="text" className="price_input" id="car"
                               placeholder="Цвет велосипеда"/>
                        <h6>Номер лицензии</h6>
                        <input onChange={changeDate} type="date" className="price_input" id="car"
                               placeholder="Дата кражи"/>
                        <h6>Дополнительная информация</h6>
                        <input onChange={changeInfo} type="text" className="price_input" id="car"
                               placeholder="Дополнительная информация"/>
                        {Auth ?
                            <div>
                                <h6>Ответственный сотрудник</h6>
                                <select onChange={changeUser}
                                        className="price_input"
                                >
                                    <option value="">Ответственный сотрудник (выберите из списка)</option>
                                    {users.map((u, index) =>
                                        <option value={u._id}>{u.firstName} {u.lastName}</option>)}
                                </select>
                            </div> : <div/>
                        }
                        <button className="button" type="button" id="price_action"
                                onClick={handleSubmit}
                        >Сообщить о краже
                        </button>
                        <div>{error}</div>
                    </form>
                    <img src={theftvelo} alt="theftvelo" className="price_image"/>
                </div>
            </div>
        </div>
    );
};

export default Theft;