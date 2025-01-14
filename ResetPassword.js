// src/components/ResetPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigateをインポート
import './ResetPassword.css'; // スタイルファイルをインポート

function ResetPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // navigateをフックで取得

  // パスワードリセットの処理
  const handleResetPassword = () => {
    if (email === '') {
      alert('メールアドレスを入力してください。');
    } else {
      alert(`パスワードリセットのリンクを ${email} に送信しました。`);
      // 実際の処理では、ここでAPIを呼び出してリセットリンクを送信することができます
    }
  };

  // ログイン画面に戻る処理
  const handleBackToLogin = () => {
    navigate('/'); // ログイン画面に遷移
  };

  return (
    <div className="reset-password-container">
      <h2>パスワードリセット</h2>
      <div className="reset-password-form">
        <div className="input-group">
          <label htmlFor="email">登録済みのメールアドレス</label>
          <input
            type="email"
            id="email"
            placeholder="メールアドレスを入力"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="reset-password-button" onClick={handleResetPassword}>
          リセットリンクを送信
        </button>

        {/* ログイン画面に戻るボタン */}
        <button className="back-to-login-button" onClick={handleBackToLogin}>
          ログイン画面に戻る
        </button>
      </div>
    </div>
  );
}

export default ResetPassword;

