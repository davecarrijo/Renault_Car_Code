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
              Simple tutorial
            </div>
            <div className='collapse-content'>
              <p className='text-slate-500 '>
                {" "}
                Just type your Security code in the box, the radio code is the
                green one
              </p>
            </div>
          </div>
          <div className='collapse collapse-arrow join-item border border-base-200'>
            <input type='radio' name='my-accordion-4' />
            <div className='collapse-title text-xl font-medium'>
              How do I find my security code?
            </div>
            <div className='collapse-content'>
              <p className='text-slate-500 '>
                <a
                  href='https://www.youtube.com/watch?v=cjoZPsyRpVU'
                  target='blank'
                  className='text-red-500'
                >
                  Youtube Video
                </a>
                , or just look for 4 digits that start with a letter in the back
                of the radio
              </p>
            </div>
          </div>
          <div className='collapse collapse-arrow join-item border border-base-200'>
            <input type='radio' name='my-accordion-4' />
            <div className='collapse-title text-xl font-medium'>
              I have not found my code, what I do?
            </div>
            <div className='collapse-content'>
              <p className='text-slate-500 '>
                Install the MyReanult app{" "}
                <a href='https://play.google.com/store/apps/details?id=com.renault.myrenault.one.fr&hl=pt_PT'>
                  Play store(android),
                </a>{" "}
                <a href='https://apps.apple.com/pt/app/my-renault/id1440073013'>
                  App store (ios)
                </a>
                , put in the VIN number and it’ll be there.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
