
import React from 'react';
import ContactCard from './Contact Card';

const ContactList = (props) => {
    
    const renderContactList = props.contacts.map((contact)=> {
     
        return (
            <ContactCard contact={ contact}/>
        )
    }   
    )
    
    return (
      <div className="ui celled list" style={{"marginTop":"15vh"}}>
            <h2>Contacts List</h2>
            {renderContactList}
        
      </div>
    )
    
}

export default ContactList;