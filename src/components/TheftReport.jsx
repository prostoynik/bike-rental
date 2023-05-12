import React, {useEffect, useState} from 'react';
import Auth from "./Auth";

const TheftReport = (props) => {
    const [cases, setCases] = useState([])

    useEffect(() => {
        listTheft();
    }, []);

    const hClick = (id) => {
        window.location.href = "/theft/"+id;
    }

    function handleSubmitExit() {
        window.location.href = "/"
    }

    function listTheft() {
        const url = 'https://sf-final-project-be.herokuapp.com/api/cases/';

        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Auth
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                setCases(data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function deleteCases(id) {
        const url = 'https://sf-final-project-be.herokuapp.com/api/cases/' + id;

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
                <h2 className="sub_title">Список всех краж</h2>
                <button className="button_exit" type="button" id="price_action"
                        onClick={handleSubmitExit}
                >Вернуться на главную
                </button>
                <div className="table">
                    {typeof (cases) === 'object'
                        ?
                        cases.map(
                            (mcase, index) =>

                            <div id={mcase._id} className="row" key={mcase._id}>
                                <div className="crow" onClick={()=>hClick(mcase._id)}>
                                <div className="trString w100">{mcase.status}</div>
                                <div className="trString w200">{mcase.licenseNumber}</div>
                                <div className="trString w100">{mcase.type}</div>
                                <div className="trString w300">{mcase.ownerFullName}</div>
                                <div className="trString w250">{mcase.createdAt}</div>
                                </div>
                                <button className="btn_delete" type="button"
                                            onClick={() => deleteCases(mcase._id)}
                                    >Удалить
                                    </button>
                            </div>
                        )
                        :
                        <div></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default TheftReport;