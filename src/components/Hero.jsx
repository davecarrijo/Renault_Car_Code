import React, { Component } from "react";

let Car_Radio_code_Num = "Invalid Security Code";

export class Hero extends Component {
  render() {
    return (
      <div>
        <h1 className='text-5xl mb-5'>Renau Car code</h1>{" "}
        <div className=' flex flex-col items-center'>
          <label className='form-control w-full max-w-xs '>
            <div className='label'>
              <span className='label-text'>
                What is your radio security code?
              </span>
              {/* <span className='label-text-alt'></span> */}
            </div>
            <input
              type='text'
              placeholder='Type here'
              className='input input-bordered {{right_letter}} w-full max-w-xs'
            />
            <div className='label'>
              {/* <span className='label-text-alt'>Bottom Left label</span> */}
              <span className='label-text-alt'>
                Not sure? Tutorial in the FAC
              </span>
            </div>
          </label>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className='w-32 btn btn-link btn-outline bg-emerald-500 hover:bg-lime-200 text-gray-950 border-lime-200 border-b-transparent border-r-4   '
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Get Code!
          </button>
          <dialog id='my_modal_3' className='modal'>
            <div className='modal-box'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                  ✕
                </button>
              </form>
              <h3 className='font-bold text-lg'>Get Code!</h3>
              <p className='py-4'>
                Your car radio code is: <br></br>
              </p>
              <h1 className='text-3xl'>{Car_Radio_code_Num}</h1>
            </div>
          </dialog>
        </div>
      </div>
    );
  }
}

export default Hero;
