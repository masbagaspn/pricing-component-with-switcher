import React from "react";
import ButtonComponent from "./button-component";

function CardComponent({data: {title, price, features}, checked}) {
    let active = false;

    if(title === 'Professional') {
        active = true;
    }

    return (
        <div className={active ? `card dark` : `card`}>
            <h1 className="title">{title}</h1>
            <span className="price">
                <small className="dollar-sign">$</small>
                {checked ? price.monthly : price.annually}
            </span>
            <ul>
                {Object.values(features).map((value, index) => <li className="feature" key={index}>{value}</li>)}
            </ul>
            <ButtonComponent />
        </div>
    )
}

export default CardComponent;