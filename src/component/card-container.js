import React from 'react';
import CardComponent from './card-component';

function CardContainer({data, checked}){
    return (
        <div className="card-container">
            {data.map((obj, index) => <CardComponent data={obj} key={index} checked={checked}/>)}
        </div>
    )
}

export default CardContainer;
