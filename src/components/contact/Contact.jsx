import React from 'react';
import ContactList from './../contactList/ContactList';

const Contact = () => (
  <section id="contact" className="section contact-bttom no-border">
    <h4 className="section__title">CONTACT ME</h4>
    <p>
      謝謝你的閱讀。<br />
      目前正在找工作當中，如果有興趣的話請聯絡我、或單純說個嗨也可以喔 👋 <br />
    </p>
    <ContactList />
  </section>
);

export default Contact;
