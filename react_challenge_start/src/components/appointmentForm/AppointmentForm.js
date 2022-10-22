import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactName = () => {
    return contacts.map((contact) => contact.name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:
        <input 
          type="text" 
          name="title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title of appointment"
          required/>
      </label>
      <br/>
      <ContactPicker 
        name="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        contacts={getContactName()}
        placeholder="Appointment with:" />
      <br/>
      <label>Date:
        <input 
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        min={getTodayString()}/>
      </label>
      <br/>
      <label>Time:
        <input 
        type="time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required />
      </label>
      <input 
      type='submit' 
      name='submit'
      value='Add Appointment'/>
    </form>
  );
};
