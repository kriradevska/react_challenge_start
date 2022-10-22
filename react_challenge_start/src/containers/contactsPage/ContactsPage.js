import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  // States for contact info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, email, phone);
      setName('');
      setEmail('');
      setPhone('');
    }};

    useEffect(() => {
      const nameIsDuplicate = () => {
        const resault = contacts.find((contact) => contact.name === name)
        if (resault !== undefined) { return true 
        } else { return false }
      }

      if (nameIsDuplicate()) {
        setDuplicate(true)
      } else {
        setDuplicate(false)
      }
    }, [name, duplicate, contacts])

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact {duplicate ? 'Name already exists' : ''}</h2>
        <ContactForm 
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList titles={contacts}/>
      </section>
    </div>
  );
};
