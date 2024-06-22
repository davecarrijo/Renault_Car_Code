import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div className='flex'>
          <footer className='footer footer-center p-4 rounded-box bg-base-200 text-base-content'>
            <aside>
              <p>Copyright © 2024 - All right reserved</p>
            </aside>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
