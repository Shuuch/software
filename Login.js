// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigateをインポート
import Header from './Header'; // ヘッダーコンポーネント
import './Login.css';

function Login() {
  const [staffId, setStaffId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // ログイン処理
  const handleLogin = () => {
    // スタッフIDとパスワードを仮の値12345で比較
    if (staffId === '12345' && password === '12345') {
      navigate('/menu'); // ログイン成功でメニュー画面へ遷移
    } else {
      alert('スタッフIDまたはパスワードが間違っています。');
    }
  };

  // パスワードリセット画面に遷移
  const handleForgotPassword = () => {
    navigate('/reset-password'); // パスワードリセット画面に遷移
  };

  return (
    <div className="login-container">
      <Header />
      <h2>ログイン</h2>
      <div className="login-form">
        <div className="input-group">
          <label htmlFor="staffId">スタッフID</label>
          <input
            type="text"
            id="staffId"
            placeholder="スタッフIDを入力"
            value={staffId}
            onChange={(e) => setStaffId(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            placeholder="パスワードを入力"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          ログイン
        </button>
        {/* パスワードを忘れた場合のボタン */}
        <button className="forgot-password-button" onClick={handleForgotPassword}>
          パスワードを忘れた場合
        </button>
      </div>
    </div>
  );
}

export default Login;
