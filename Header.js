import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const logo = process.env.PUBLIC_URL + '/assets/logo.png'; // public/assets/logo.png

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 確認ポップアップを表示
    const confirmLogout = window.confirm('本当にログアウトしますか？');
    if (confirmLogout) {
      navigate('/'); // ログアウト時にログイン画面に遷移
    }
  };

  const handleLogoClick = () => {
    navigate('/menu'); // ロゴクリック時にメニュー画面に遷移
  };

  return (
    <div className="header-container">
      <img 
        src={logo} 
        alt="Company Logo" 
        className="logo" 
        onClick={handleLogoClick} // ロゴ画像クリック時にメニュー画面に遷移
      />
      <h1>Care Tech KUT</h1>
      <button className="logout-button" onClick={handleLogout}>ログアウト</button>
    </div>
  );
}

export default Header;
