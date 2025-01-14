// src/components/Menu.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // ヘッダーをインポート
import './Menu.css';

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <Header />
      <div className="menu-content">
        <h2>メニュー</h2>
        <div className="menu-buttons">
          <button 
            className="menu-button menu-health" 
            onClick={() => navigate('/health-info')} // 健康情報画面に遷移
          >
            健康情報
          </button>
          <button 
            className="menu-button menu-medicine" 
            onClick={() => navigate('/medicine-check')}
          >
            服薬チェック
          </button>
          <button 
            className="menu-button menu-qa" 
            onClick={() => navigate('/chat-qa')} // チャット式Q&A画面に遷移
          >
            Q&A
          </button>
        </div>
      </div>

      {/* フッター */}
      <div className="menu-footer">
        <p>
          <button className="footer-link" onClick={() => navigate('/contact-us')}>
            お問い合わせはこちら
          </button>
        </p>
        <p>
          <button className="footer-link" onClick={() => navigate('/reset-password')}>
            パスワードの再設定
          </button>
        </p>
      </div>
    </div>
  );
}

export default Menu;
