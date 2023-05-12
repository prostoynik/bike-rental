import React, {useEffect, useState} from 'react';
import Auth from "./Auth";

const ResponsibleList = (props) => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        listUsers();
    }, []);

    const hClick = (id) => {
        window.location.href = "/responsible/"+id;
    }

    function handleSubmit() {
        window.location.href = "/responsible"
    }

    function handleSubmitExit() {
        window.location.href = "/"
    }

    function listUsers() {
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

    function deleteCases(id) {
        const url = 'https://sf-final-project-be.herokuapp.com/api/officers/' + id;

        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Auth
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <div className="wrapper">
            <div className="TheftReport">
                <h2 className="sub_title">Ответственные сотрудники</h2>
                <button className="button_exit" type="button" id="price_action"
                        onClick={handleSubmitExit}
                >Вернуться на главную
                </button>
                <div className="table">
                    {users.map(
                            (mcase, index) =>
                                <div id={mcase._id} className="row" key={mcase._id}>
                                    <div className="crow" onClick={()=>hClick(mcase._id)}>
                                        <div className="trString w200">{mcase.firstName}</div>
                                        <div className="trString w200">{mcase.lastName}</div>
                                        <div className="trString w200">{mcase.email}</div>
                                    </div>
                                    {index!==0?<button className="btn_delete" type="button"
                                            onClick={() => deleteCases(mcase._id)}
                                    >Удалить
                                    </button>:<div/>}
                                </div>
                        )
                    }
                </div>
                <button className="button" type="button" id="price_action"
                        onClick={handleSubmit}
                >Добавить сотрудника
                </button>
            </div>
        </div>
    );
};

export default ResponsibleList;