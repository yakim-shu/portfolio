import React from 'react';

const Work = () => (
  <section id="work" className="section work">
    <h4 className="section__title">WORK EXPERIENCE</h4>
    <div className="section__content work__item">
      <a className="title" href="https://github.com/Lidemy/mentor-program-3rd" rel="noopener noreferrer">LIDEMY 第三期的程式導師計畫</a>
      <p className="summary">
        畢業生 <br />
        Mar, 2019 – Oct, 2019<br />
        參加由 Lidemy 鋰學院創辦人 Huli 所開設的 <a href="https://github.com/Lidemy/mentor-program-3rd">【 程式導師計畫第三期 】</a>，過著與
        <a href="https://github.com/Lidemy/homeworks-3rd/issues?utf8=✓&q=yakim" rel="noopener noreferrer" target="_blank"> 24 週作業 </a> 為伍的日子，期間加強了許多以往模糊不清的觀念，並在 Blog 持續發表技術筆記。
      </p>
      <ul className="info">
        <li>前端框架 ： React ( with Redux )</li>
        <li>前端技術 ： 熟悉原生 JavaScript 語法特性、SCSS、PostCSS</li>
        <li>後端技術 ： PHP 基本的 CRUD 操作、開發 RESTFul API</li>
        <li>資安防範 ：了解如何預防 XSS、SQL Injection、CORS 的基本常識</li>
        <li>現代網頁工程及優化 ： Webpack 打包工具、 gulp 任務管理、網頁載入優化</li>
      </ul>
    </div>

    <div className="section__content work__item">
      <a className="title" href="https://www.ettoday.net/" target="_blank" rel="noopener noreferrer">ETTODAY 東森新聞雲</a>
      <p className="summary">
        網頁設計師<br />
        Jul, 2014 – Sep, 2017<br />
        負責公司子頻道的開發、維護，以及短期的活動網站，與 PM 跟後端團隊合作，協助討論新聞部的需求，簡化開發流程，同時接收廣告需求單、製作 Banner、Logo。
      </p>
      <ul className="info">
        <li>【 子頻道 】播吧、ET 時尚雲、鍵盤大檸檬</li>
        <li>【 活動公版系統 】主要是供網友投稿 ( UGC )、需要因應不同主題所設置的公板系統，新聞部人員只要 10 分鐘內就可以推出新活動，大大降低開發推出徵稿活動的成本。</li>
        {/* <li>【 好朋友野餐日 】ETToday 在華山舉辦的線下活動，吸引大量活動人潮與相關的業務合作。</li> */}
        {/* <li>【 大家來說鬼 】每年農曆七月固定會有的活動網站</li> */}
      </ul>
    </div>
  </section>
);

export default Work;
