import { useState } from "react";
import SearchFeature from "./Nice_codes";

// Importe the hole list
const Arr_Codes = SearchFeature();

const Contact = (props) => {
  return (
    <li>
      {/* <img src={props.image} alt="img" /> */}
      <span>{props.name}</span>
      <span className='phone'>{props.phone}</span>
    </li>
  );
};

const ContactList = () => {
  const [contacts, setContacts] = useState(Arr_Codes);

  const searchHandler = (event) => {
    let searcjQery = event.target.value.toLowerCase(),
      displayedContacts = Arr_Codes.filter((el) => {
        let searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searcjQery) !== -1;
      });
    setContacts(displayedContacts);
  };

  return (
    <div className='holder'>
      <input
        type='text'
        placeholder='Type here'
        className='input input-bordered {{right_letter}} w-full max-w-xs mb-5'
        onChange={searchHandler}
      />
      {/* <input type='text' className='search' onChange={searchHandler} /> */}
      <ul>
        {contacts.map((el) => {
          return (
            <Contact
              name={el.name}
              // //   image={el.image}
              phone={el.Radio_code}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
