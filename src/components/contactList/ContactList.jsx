import React from 'react';

const ContactList = () => (
  <div className="contact-info">
    <p>
      <i className="fas fa-paper-plane fa-lg"></i>
      <a href="mailto:toromilk80129@gmail.com" target="_blank" rel="noopener noreferrer">toromilk80129@gmail.com</a>
    </p>
    {/* <p>
      <i className="fas fa-phone-alt fa-lg"></i>
      <a href="tel:+996-905-431-505">+886 905 431 505</a>
    </p> */}
    <p>
      <i className="fas fa-desktop fa-lg"></i>
      <a href="https://yakimhsu.com/writing.html" rel="noopener noreferrer" target="_blank">yakimhsu.com</a>
    </p>
    <p className="resume">
      <i className="far fa-file-alt fa-lg"></i>
      <a href="./Yakim_Resume.pdf" download="Yakim_Resume">resume (pdf)</a>
    </p>
  </div>
);

export default ContactList;
