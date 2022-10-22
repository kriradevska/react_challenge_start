import React from "react";


export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name:
      <input 
        type='text'
        name='name' 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        placeholder='Contact Name'
        required />
      </label>
      <br/>
      <label>e-mail:
        <input 
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Contact e-mail'
          required/>
      </label>
      <br />
      <label>Phone number:
        <input 
          type='tel'
          name='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Please use the following pattern: 000/000-000'
          required
          pattern='[0-9]{3}/[0-9]{3}-[0-9]{3}'/>
      </label>
      <input 
      type='submit' 
      name='submit'
      value='Add Contact'/>
    </form>
  );
};
