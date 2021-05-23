import React from 'react'
import contacts from '../contacts';
import Avatar from './Avatar';
import contactDetails from './contactDetails';


function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1VZ4OCuvtdulY2pv3Ym9cp6ekmcHEOmP6mA&usqp=CAU" />


            {contacts.map(contactDetails)}
        </div>
    )
}

export default App;
