import React from "react";

export const ContactPicker = ({name, onChange, contacts}) => {
  return (
    <label>Choose contact:
      <select onChange={onChange} name={name}>
        <option value={''} key={-1} selected="selected">No Contact Selected</option>
        {contacts.map((contact) => {
          return <option value={contact} key={contact}>{contact}</option>
        })}
      </select>
    </label>
  );
};
