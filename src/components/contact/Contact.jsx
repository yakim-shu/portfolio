import React from 'react';

const Contact = () => (
  <section id="contact" className="section contact-bttom no-border">
    <h4 className="section__title">CONTACT ME</h4>
    <div className="contact-info">
      <p>
        謝謝你的閱讀。<br />
        目前正在找工作當中，如果有興趣的話請聯絡我、或單純說個嗨也可以喔 👋 <br />
      </p>
      <p>
        <i className="fas fa-paper-plane fa-lg"></i>
        <a href="mailto:toromilk80129@gmail.com" target="_blank" without rel="noopener noreferrer">toromilk80129@gmail.com</a>
      </p>
      <p>
        <i className="fas fa-phone-alt fa-lg"></i>
        <a href="tel:+996-905-431-505">+886 905 431 505</a>
      </p>
      <p>
        <i className="fas fa-desktop fa-lg"></i>
        <a href="https://yakimhsu.com/writing.html" target="_blank">yakimhsu.com</a>
      </p>
      <p>
        <i className="far fa-file-alt fa-lg"></i>
        <a href="">resume (pdf)</a>
      </p>
    </div>
  </section>
);

export default Contact;
