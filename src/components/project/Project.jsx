import React, { Component } from 'react';
import { Modal } from 'antd';


const Blog = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">SPA - BLOG
      <a href="https://yakim-shu.github.io/SPA-Blog/" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/yakim-shu/SPA-Blog" rel="noopener noreferrer" target="_blank">Github Repo</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible1')}>
      <p className="summary">用 React 打造的 SPA Blog，裡面的文章都是自己學習 React 的筆記。</p>
      <ul className="info">
        <h5>功能</h5>
        <li>文章分類、標題搜尋</li>
        <li>支持 <code>markdown</code> 格式發布文章，並支援 code highlight</li>
        <li>操作文章會有回饋訊息，增加使用者體驗</li>
      </ul>
      <ul className="info">
        <h5>技術</h5>
        <li><code>react-router</code> 處理前端路由</li>
        <li>搭配 <code>Redux</code> 管理狀態，解決 props drilling 的問題</li>
        <li>使用 <code>redux-promise</code> 處理非同步操作</li>
        <li>文章 API 以 <code>JSON Server</code> 部署到 Digital Ocean、並使用 <code>Nginx</code> 作代理</li>
      </ul>
    </div>
    <Modal
      width="860px"
      footer={null}
      title="SPA - BLOG"
      visible={visible}
      onCancel={hideModal}
    >
      <a href="https://yakim-shu.github.io/SPA-Blog/" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/yakim-shu/blog-api" rel="noopener noreferrer" target="_blank">Github Repo</a>
      <ul>
        <li>
          <h4>首頁</h4>
          <img src="./image/pic_blog_home.png" alt="" />
        </li>
        <li>
          <h4>文章內頁</h4>
          <img src="./image/pic_blog_article.png" alt="" />
        </li>
        <li>
          <h4>文章列表</h4>
          <img src="./image/pic_blog_list.png" alt="" />
        </li>
        <li>
          <h4>新增文章</h4>
          <img src="./image/pic_blog_addPost.png" alt="" />
        </li>
      </ul>
    </Modal>
  </div>
)


const Comment = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">名言大亂鬥 - PHP 留言板
      <a href="http://mentor-program.co/group3/yakim/week13/index.php" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/Lidemy/mentor-program-3rd-yakim-shu/tree/master/homeworks/week13/hw3" rel="noopener noreferrer" target="_blank">Github Repo</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible2')}>
      <p className="summary">第一個 PHP 練習作品，藉由此作業更了解前、後端運作。</p>
      <ul className="info">
        <h5>功能</h5>
        <li>支持多層子留言及按讚功能、登入狀態會標示出原 po 的留言</li>
        <li>完成操作時會顯示回饋訊息、留言以 Ajax 方式操作</li>
        <li>會員系統：註冊、登入區塊</li>
        <li>會員權限系統：一般管理員可管理自己的留言、管理員有後台操作所有留言</li>
      </ul>
      <ul className="info">
        <h5>技術</h5>
        <li>後端： <code>PHP</code> 基本的 CRUD 操作</li>
        <li>資訊安全： 防 <code>XSS</code>、<code>SQL Injection</code> </li>
        <li>部署： Server 為 <code>Apache</code>、部署到 Ditgital Ocean</li>
      </ul>
    </div>
    <Modal
      width="860px"
      footer={null}
      title="名言大亂鬥 - PHP 留言板"
      visible={visible}
      onCancel={hideModal}
    >
      <ul>
        <li>
          <h4>一般會員登入</h4>
          <img src="./image/pic_commet_home.png" alt="" />
        </li>
        <li>
          <h4>管理員登入</h4>
          <img src="./image/pic_commet_admin.png" alt="" />
        </li>
      </ul>
    </Modal>
  </div>
);


const Lazy = ({ visible, showModal, hideModal }) => (
  <div className="section__content">
    <h3 className="title">Lazy - Hackathon
      <a href="https://yakim-shu.github.io/lazy-hackathon-yakim/dist/" rel="noopener noreferrer" target="_blank">Demo</a>
      <a href="https://github.com/yakim-shu/lazy-hackathon-yakim" rel="noopener noreferrer" target="_blank">Github Repo</a>
      <a href="https://github.com/Lidemy/lazy-hackathon/issues/7" rel="noopener noreferrer" target="_blank">優化過程紀錄</a>
    </h3>
    <div className="project__content" type="primary" onClick={() => showModal('visible3')}>
      <p className="summary">此為跟導師 Huli 合作的專案，故意做一個速度很慢的網站，當作課程的作業之一，目的是讓學生藉由優化此網頁來學習網頁最佳化。同時也紀錄了詳細的<a href="https://github.com/Lidemy/lazy-hackathon/issues/7" rel="noopener noreferrer" target="_blank"> 優化過程 </a>。</p>
      <ul className="info">
        <h5>優化成果</h5>
        <li>原始數據：行動版： 9 分、電腦版： 52 分</li>
        <li>優化後結果：行動版： 97 分、電腦版： 100 分</li>
      </ul>
      <ul className="info">
        <h5>優化技術 :  </h5>
        <li>基本壓縮 : <code>HTML</code>、<code>JavaScript</code>、<code>CSS</code></li>
        <li>CSS 優化 : <code>PostCSS</code>、<code>gulp-uncss</code></li>
        <li>圖片優化 : <code>tinypng-compress</code>、<code>lazyload</code>、<code>webp</code>、<code>CSS Sprite</code></li>
      </ul>
    </div>
    <Modal
      width="860px"
      footer={null}
      title="Lazy - Hackathon"
      visible={visible}
      onCancel={hideModal}
    >
      <img src="./image/pic_lazy_01.png" alt="" />
    </Modal>
  </div>
);


class Project extends Component {
  state = {
    visible1: false,
    visible2: false,
    visible3: false,
  };

  showModal = type => {
    this.setState({
      [type]: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible1: false,
      visible2: false,
      visible3: false,
    });
  };

  render() {
    const { visible1, visible2, visible3 } = this.state;
    return (
      <section id="project" className="section project">
        <h4 className="section__title">PROJECTS</h4>
        <Blog visible={visible1} showModal={this.showModal} hideModal={this.hideModal} />
        <Comment visible={visible2} showModal={this.showModal} hideModal={this.hideModal} />
        <Lazy visible={visible3} showModal={this.showModal} hideModal={this.hideModal} />
      </section>
    )
  }
};

export default Project;
