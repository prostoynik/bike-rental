import React, {useState, useEffect} from 'react';
import Auth from "./Auth";
import join from "../images/join.png";


const Responsible = () => {
    const [email, setEmail] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pass, setPass] = useState('');
    const [clientId, setClientId] = useState('');
    const [error, setError] = useState('');

    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changeFirstName(event) {
        setFirstName(event.target.value);
    }

    function changeLastName(event) {
        setLastName(event.target.value);
    }

    function changePass(event) {
        setPass(event.target.value);
    }

    function changeClientId(event) {
        setClientId(event.target.value);
    }

    function handleSubmit() {

        const url = 'https://sf-final-project-be.herokuapp.com/api/officers/';

        const myObject = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": pass,
            "clientId": clientId
        };

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(myObject),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Auth
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status === 'OK') {
                    setError('')
                    window.location.href = "/responsibleList"
                } else setError(data.message)
            })
            .catch(err => {
                setError(err)
            });
    }

    return (
        <div className="wrapper">
            <div className="price" id="price">
                <div className="container">
                    <h2 className="sub_title">Новый ответственный сотрудник</h2>
                    <form action="" className="price_form">
                        <h6>Имя</h6>
                        <input onChange={changeFirstName} type="text" className="price_input" id="name"
                               placeholder="Имя"/>
                        <h6>Фамилия</h6>
                        <input onChange={changeLastName} type="text" className="price_input" id="name"
                               placeholder="Фамилия"/>
                        <h6>Электронная почта</h6>
                        <input onChange={changeEmail} type="text" className="price_input" id="car"
                               placeholder="Электронная почта"/>

                        <h6>Пароль</h6>
                        <input onChange={changePass} type="text" className="price_input" id="car"
                               placeholder="Пароль"/>
                        <h6>clientId</h6>
                        <input onChange={changeClientId} type="text" className="price_input" id="car"
                               placeholder="clientId"/>
                        <button className="button" type="button" id="price_action"
                                onClick={handleSubmit}
                        >Создать
                        </button>
                        <div>{error}</div>
                    </form>
                    <img src={join} alt="join" className="price_image"/>
                </div>
            </div>
        </div>

    );
};

export default Responsible;