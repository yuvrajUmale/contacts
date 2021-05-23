import React from 'react'
import Card from './Card';


function contactDetails(contact) {
    return (
        <Card 
        key = {contact.id}
        id = {contact.id}
        name = {contact.name}
        img = {contact.imgURL}
        email = {contact.email}
        tel = {contact.tel}
    />
    )
}

export default contactDetails;
