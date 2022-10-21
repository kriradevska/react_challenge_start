import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  // State variables for contacts and appointments
  const [contact, setContact] = useState([]);
  const [appointment, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

  //function to handle contacts
  const handleChangeContacts = ({target}) => {
    const { name, value } = target;
    setContact((prev) => ({
      ...prev,
      [name] : value
    }))
  }

  //function to handle appointments
  const handleChangeAppointments = ({target}) => {
    const { name, value } = target;
    setAppointments((prev) => ({
      ...prev,
      [name] : value
    }))
  }


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage value={contact} onChange={handleChangeContacts}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage value={appointment} onChange={handleChangeAppointments}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
