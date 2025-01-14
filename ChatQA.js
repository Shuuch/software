import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // ヘッダーをインポート
import './ChatQA.css';

const ChatQA = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  // ドラえもんの名言を10種類用意
  const botReplies = [
    "「男だろ、負けてもいいから戦うぐらいの勇気をもて」- ドラえもん",
    "「未来は今この瞬間から作られるんだ。」 - ドラえもん",
    "「大丈夫だよ、君には僕がついてる！」 - ドラえもん",
    "「夢を追いかけることが大切だよ。」 - ドラえもん",
    "「諦めない限り、失敗じゃない。」 - ドラえもん",
    "「君の未来は君の手の中にあるんだよ。」 - ドラえもん",
    "「人はみんな、失敗を乗り越えて成長するんだ。」 - ドラえもん",
    "「焦らずに、少しずつ進んでいけばいいんだよ。」 - ドラえもん",
    "「僕の道具だって、君が使うからこそ意味があるんだ。」 - ドラえもん",
    "「何かを始めるのに遅すぎることはない。」 - ドラえもん"
  ];

  // メッセージ送信時の処理
  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'user', text: input }]);
      setInput('');

      // ランダムにボットの返答を選ぶ
      const randomIndex = Math.floor(Math.random() * botReplies.length);
      const botReply = botReplies[randomIndex];

      // ボットの返答をメッセージリストに追加
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'bot', text: botReply },
      ]);
    }
  };

  return (
    <div className="chatqa-container">
      <Header /> {/* ヘッダーを追加 */}
      <div className="chatqa-header">
        <button className="back-button" onClick={() => navigate('/menu')}>
          メニューに戻る
        </button>
        <h2>Q&A チャット</h2>
      </div>
      <div className="chatqa-box">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="chatqa-input">
        <input
          type="text"
          placeholder="質問を入力..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>送信</button>
      </div>
    </div>
  );
};

export default ChatQA;
