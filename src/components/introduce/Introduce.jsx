import React from 'react';
import ContactList from './../contactList/ContactList';

const Introduce = () => (
  <section className="section no-border">
    <h1 className="name-title">YAKIM HSU</h1>
    <section className="introduce">
      <p><strong>嗨！ 我是 Yakim，一個還在自我精進的 Front-End Developer 🎅</strong></p>
      <p>
        Taipei <br />
        2019 年參加程式導師計畫的這半年，寫了<a href="https://yakimhsu.com" rel="noopener noreferrer" target="_blank"> 50 餘篇技術筆記</a>。單看數字意義不大，但背後的理念是我不談努力、談行動。
      </p>
    </section>
    <ContactList />
  </section>
);

export default Introduce;
