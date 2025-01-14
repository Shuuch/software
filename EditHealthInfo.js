import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header'; // ヘッダーをインポート
import './EditHealthInfo.css';

const EditHealthInfo = () => {
  const { id } = useParams(); // URLからIDを取得
  const navigate = useNavigate();
  const [healthData, setHealthData] = useState({
    name: '',
    temperature: '',
    bloodPressure: '',
    pulse: '',
    status: '',
  });

  // 仮のデータを取得してフォームにセット
  useEffect(() => {
    const fetchHealthData = async () => {
      const mockData = {
        id,
        name: '佐藤 太郎',
        temperature: '36.5',
        bloodPressure: '120/80',
        pulse: '72',
        status: '良好',
      };
      setHealthData(mockData);
    };

    fetchHealthData();
  }, [id]);

  // 入力値変更時の処理
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHealthData((prevData) => ({ ...prevData, [name]: value }));
  };

  // 更新ボタン押下時の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('健康情報を更新しました！');
    navigate(-1); // 前の画面に戻る（詳細画面）
  };

  return (
    <div className="edit-health-info-container">
      <Header />
      <h2>健康情報を編集</h2>
      <form className="edit-health-info-form" onSubmit={handleSubmit}>
        <label>
          名前:
          <input
            type="text"
            name="name"
            value={healthData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          体温:
          <input
            type="number"
            name="temperature"
            value={healthData.temperature}
            onChange={handleChange}
          />
          <span>°C</span> {/* 単位を表示 */}
        </label>
        <label>
          血圧:
          <input
            type="number"
            name="bloodPressure"
            value={healthData.bloodPressure.split('/')[0]} // 上の血圧を表示
            onChange={handleChange}
          />
          <span>/</span>
          <input
            type="number"
            name="bloodPressure"
            value={healthData.bloodPressure.split('/')[1]} // 下の血圧を表示
            onChange={handleChange}
          />
          <span>mmHg</span> {/* 単位を表示 */}
        </label>
        <label>
          脈拍:
          <input
            type="number"
            name="pulse"
            value={healthData.pulse}
            onChange={handleChange}
          />
          <span>bpm</span> {/* 単位を表示 */}
        </label>
        <label>
          状態:
          <input
            type="text"
            name="status"
            value={healthData.status}
            onChange={handleChange}
          />
        </label>
        <div className="edit-health-info-buttons">
          <button type="button" onClick={() => navigate(-1)}>
            キャンセル
          </button>
          <button type="submit">更新する</button>
        </div>
      </form>
    </div>
  );
};

export default EditHealthInfo;
