import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';

function ContactUs() {
  const navigate = useNavigate();

  // ログイン画面に戻るための関数
  const handleBackToMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="contactus-container">
      <h2>お問い合わせ</h2>
      <div className="contactus-form">
        <p>お問い合わせ内容をご入力ください。</p>
        <textarea placeholder="ご質問・ご意見" rows="5" className="contactus-textarea"></textarea>
        <button className="submit-button">送信</button>
        <button className="back-to-menu-button" onClick={handleBackToMenu}>
          メニューに戻る
        </button>
      </div>
    </div>
  );
}

export default ContactUs;
