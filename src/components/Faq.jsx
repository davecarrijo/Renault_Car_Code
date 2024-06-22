import React, { Component } from "react";

export class Faq extends Component {
  render() {
    return (
      <div>
        <h2 className='text-3xl'>FAC:</h2>
        <div className='join join-vertical w-full'>
          <div className='collapse collapse-arrow join-item border border-base-200'>
            <input type='radio' name='my-accordion-4' defaultChecked />
            <div className='collapse-title text-xl font-medium'>
              Click to open this one and close others
            </div>
            <div className='collapse-content'>
              <p className='text-slate-500 '>hello</p>
            </div>
          </div>
          <div className='collapse collapse-arrow join-item border border-base-200'>
            <input type='radio' name='my-accordion-4' />
            <div className='collapse-title text-xl font-medium'>
              Click to open this one and close others
            </div>
            <div className='collapse-content'>
              <p className='text-slate-500 '>hello</p>
            </div>
          </div>
          <div className='collapse collapse-arrow join-item border border-base-200'>
            <input type='radio' name='my-accordion-4' />
            <div className='collapse-title text-xl font-medium'>
              Click to open this one and close others
            </div>
            <div className='collapse-content'>
              <p className='text-slate-500 '>
                Install the MyReanult app, put in the VIN number and it’ll be
                there.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
