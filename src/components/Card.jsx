import React from 'react'
import Avatar from './Avatar';
import Details from './Details';
import Id from './Id';
function Card(props) {
    return (
        <div className = "card">
        <div className = "top">
            <Id id = {props.id}/>
            <h2 className = "name">{props.name}</h2>
            <Avatar img = {props.img} />
        </div>
        <div className = "bottom">
            <Details email = {props.email}/>
            <Details tel = {props.tel}/>
        </div>
        </div>
    )
};

export default Card
