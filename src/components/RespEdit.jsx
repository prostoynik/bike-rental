import React, {useEffect, useState} from 'react';
import {useMatch} from "react-router-dom";
import Auth from "./Auth";

const RespEdit = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [clientId, setClientId] = useState(null);
    const [approved, setApproved] = useState(false);

    const match = useMatch("responsible/:id");
    const {id} = match.params;

    useEffect(() => {

        responsible();
    }, []);

    const responsible = () => {

        const url = 'https://sf-final-project-be.herokuapp.com/api/officers/' + id;


        fetch(url, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Auth
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                setFirstName(data.data.firstName);
                setLastName(data.data.lastName);
                setEmail(data.data.email);
                setClientId(data.data.clientId);
                setApproved(data.data.approved);
            })
            .catch(err => {
                console.log(err);
            });
        console.log(firstName)
    }

    function handleSubmit() {

        const url = 'https://sf-final-project-be.herokuapp.com/api/officers/' + id;

        const myObject = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "clientId": clientId,
            "approved": approved
            // "password": pass

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
                window.location.href = "/responsibleList"
            })
            .catch(err => {
                console.log(err);
            });
    }

    function changeFirstName(event) {
        setFirstName(event.target.value);
    }

    function changeLastName(event) {
        setLastName(event.target.value);
    }

    function changeEmail(event) {
        setEmail(event.target.value);
    }

    function changeClientId(event) {
        setClientId(event.target.value);
    }

    function changeApproved(event) {
        setApproved(event.target.checked);
    }

    return (
        <div className="wrapper">
            <div className="price" id="price">
                <div className="container">
                    <h2 className="sub_title">Информация о сотруднике</h2>
                    <form action="" className="price_form">
                        <h6>Имя</h6>
                        <input onChange={changeFirstName} type="text" className="price_input" id="name"
                               placeholder="Имя"
                               value={firstName}
                        />
                        <h6>Фамилия</h6>
                        <input onChange={changeLastName} type="text" className="price_input" id="name"
                               placeholder="Фамилия"
                               value={lastName}
                        />
                        <h6>Электронная почта (редактировать поле нельзя)</h6>
                        <input onChange={changeEmail} type="text" className="price_input" id="car"
                               placeholder="Электронная почта"
                               value={email}
                        />
                        <h6>ClientId (редактировать поле нельзя)</h6>
                        <input onChange={changeClientId} type="text" className="price_input" id="car"
                               placeholder="ClientId"
                               value={clientId}
                        />
                        <div className="lab">
                            <label htmlFor="subscribeNews">Одобрен</label>
                            <input onChange={changeApproved} checked={approved} style={{"marginLeft": "10px"}}
                                   type="checkbox"
                                   id="subscribeNews"
                                   className="subscribe"
                            />
                        </div>

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

export default RespEdit;