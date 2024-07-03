import { useState, useEffect } from "react";
import SearchFeature from "./Nice_codes";

// Importe the hole list
const Arr_Codes = SearchFeature();

const Contact = (props) => {
  return (
    <li>
      <span>{props.Security_code}</span>
      <span className='Radio_code'>{props.Radio_code}</span>
    </li>
  );
};

const ContactList = () => {
  const [contacts, setContacts] = useState(Arr_Codes);

  const searchHandler = (event) => {
    let searchJQuery = event.target.value,
      displayedContacts = Arr_Codes.filter((showData) => {
        let searchValue = showData.Security_code;
        return searchValue.indexOf(searchJQuery) !== -1;
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
      <div id='parent'>
        <div>
          <ul>
            {contacts.map((showData) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Contact
                  Security_code={showData.Security_code}
                  Radio_code={showData.Radio_code}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
