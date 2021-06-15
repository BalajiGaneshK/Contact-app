import '../App.css';
import React, { useState, useEffect } from 'react';
import AddContact from './Add Contact';
import Header from './Header';
import ContactList from './Contact List';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  let arr= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (arr === null)
    arr = [];
  const [contacts, setContacts] = useState(arr);
  const [resourceType, setResourceType] = useState('Comments');


  const addContactHandler =  (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
    //console.log("All contacts", contacts);
  }

  useEffect(() => {
    console.log("Updated resource type is :",resourceType);
  }, [resourceType]);


  useEffect(() => {
    console.log("Some state entity changed in App.js");
  });

  console.log("Rendered");

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))    
  }, [contacts]);

  const [val, setVal] = useState(0);
  
  return (
    <div className="ui container" >
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
      <button onClick={() => { setResourceType('Posts') }}>Posts</button>
      <button onClick={() => { setResourceType('Comments') }}>Comments</button>
      <button onClick={() => { setResourceType('Users') }}>Users</button>
      <button onClick={() => { setVal(Math.random()) }}>Change Val from {val}</button>
      <button onClick={() => {console.log("2nd button clicked") }}>Don't Change val value</button>
    </div>
  );
}

export default App;
