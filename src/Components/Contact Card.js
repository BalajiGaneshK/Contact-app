import React from 'react';
import userIcon from '../images/muser.png';
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item" style={{"position":"relative"}}>
            <img className="ui avatar image" src={userIcon} alt="user"/>
            <div className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
            </div>
            <i className ="trash alternate outline icon" style={{"position":"absolute","right":"0%","bottom":"20%","color":"red"}}></i>
        </div>
        )

    
    
}

export default ContactCard;