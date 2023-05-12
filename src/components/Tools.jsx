import React from 'react';
import Header from "./Header";
import Hat from "./Hat";
import BikeList from "./BikeList";
import Footer from "./Footer";

const Tools = ({enter}) => {

    let autorized = false;
    console.log(autorized);

    function setEnter(count){
        autorized = count;
        console.log(autorized);
    }

    return (
        <div className="wrapper">
            <Header enter={setEnter}/>
            <Hat/>
            <BikeList />
            <Footer/>
        </div>
    );
};

export default Tools;