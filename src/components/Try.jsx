import React, { Component } from "react";
import SearchFeature from "./Nice_codes";

export class Try extends Component {
  constructor() {
    super();
    this.data = [
      "W323 - 2334",
      "W323 - 2334",
      "W323 - 2334",
      "W323 - 2334",
      "W323 - 2334"
    ];
    this.state = {
      count: 2,
      defaultCount: 2
    };
  }
  handleCount() {
    let count = this.state.defaultCount;
    count = count + this.state.count;
    this.setState({ count });
  }
  render() {
    const count = this.state.count;
    const showData = (item, index) => {
      return index < count ? <li className='list-none'>{item}</li> : "";
    };

    const searchHandler = (event) => {
      let searchJQuery = event.target.value,
        displayedContacts = Arr_Codes.filter((showData) => {
          let searchValue = showData.Security_code;
          return searchValue.indexOf(searchJQuery) !== -1;
        });
      setContacts(displayedContacts);
    };
    return (
      <div>
        <input
          type='text'
          placeholder='Type here'
          className='input input-bordered {{right_letter}} w-full max-w-xs mb-5'
          onChange={searchHandler}
        />
        {this.data.map(showData)}
        <a href='#' onClick={this.handleCount.bind(this)}>
          <button>Load</button>
        </a>
      </div>
    );
  }
}

export default Try;
