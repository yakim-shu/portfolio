import React from 'react';

const Introduce = () => (
  <section className="section no-border">
    <h1 className="name-title">YAKIM HSU</h1>
    <section className="introduce">
      <p><strong>嗨！ 我是 Yakim，一個還在自我精進的 Front-End Developer 🎅</strong></p>
      <p>
        Taipei <br />
        2019 年參加程式導師計畫的這半年，寫了<a href="https://yakimhsu.com" target="_blank"> 50 篇技術筆記</a>。單看數字意義不大，但背後的理念是我不談努力、談行動。
      </p>
    </section>
    <div className="contact-info">
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

export default Introduce;
