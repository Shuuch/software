import React from 'react';
import './MedicineCheck.css';
import Header from './Header'; // ヘッダーをインポート

function MedicineCheck() {
  return (
    <div className="medicine-check-container">
      <Header />
      <div className="medicine-check-content">
        <h2>服薬チェック</h2>
        <form>
          <div className="form-group">
            <label htmlFor="medicine-name">薬の名前</label>
            <input type="text" id="medicine-name" placeholder="薬の名前を入力" />
          </div>
          <div className="form-group">
            <label htmlFor="dosage">服用量</label>
            <input type="text" id="dosage" placeholder="服用量を入力" />
          </div>
          <div className="form-group">
            <label htmlFor="time">服用時間</label>
            <input type="text" id="time" placeholder="服用時間を入力" />
          </div>
          <button type="submit" className="submit-button">確認</button>
        </form>
      </div>
    </div>
  );
}

export default MedicineCheck;
