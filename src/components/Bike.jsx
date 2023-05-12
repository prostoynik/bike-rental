import React, {useContext} from 'react';
import gear from '../images/gear.png';
import wheel from '../images/wheel.png';
import belt from '../images/belt.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
// import BikeList from "./BikeList";

const Bike = (props) => {

    // const handleChange = (event) => {
    //     console.log(event.target.value);
    //     props.handleChildValue(event.target.value);
    // }

    return (
        <div className="car_item">
            <div className="car_item_image">
                <img src={props.foto} alt=""/>
            </div>
            <div className="car_item_title">{props.title}</div>

            <div className="car_item_info">
                <div className="car_item_point">
                    <img src={gear} alt="gear"/>
                        <div>Вид</div>
                        <div>{props.view}</div>
                </div>
                <div className="car_item_point">
                    <img src={wheel} alt="wheel"/>
                        <div>Тип</div>
                        <div>{props.type}</div>
                </div>
                <div className="car_item_point">
                    <img src={belt} alt="belt"/>
                        <div>Для кого</div>
                        <div>{props.age}</div>
                </div>
            </div>
            <div className="car_item_action">
                <AnchorLink href='#price'><button className="button car_button" onClick={() => props.remove(props.title)} value={props.title}>Зaбронировать</button></AnchorLink>
            </div>
        </div>
);
};

export default Bike;