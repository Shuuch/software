import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header'; // ヘッダーをインポート
import './HealthDetail.css';

const HealthDetail = () => {
  const { id } = useParams(); // URLからIDを取得
  const navigate = useNavigate();
  const [healthData, setHealthData] = useState(null);

  // 仮の健康情報データ
  useEffect(() => {
    const fetchHealthData = async () => {
      const mockData = {
        id,
        name: '佐藤 太郎',
        temperature: '36.5°C',
        bloodPressure: '120/80 mmHg',
        pulse: '72 bpm',
        status: '良好',
        date: '2025-01-14',
      };
      setHealthData(mockData);
    };

    fetchHealthData();
  }, [id]);

  // 情報を更新する処理
  const handleUpdate = () => {
    navigate(`/edit-health-info/${healthData.id}`); // EditHealthInfoページに遷移
  };

  if (!healthData) return <p>データを読み込み中...</p>;

  return (
    <div className="health-detail-container">
      <Header />
      <div className="health-detail-content">
        <h2>健康情報詳細</h2>
        <div className="health-detail-item">
          <p><strong>名前:</strong> {healthData.name}</p>
          <p><strong>体温:</strong> {healthData.temperature}</p>
          <p><strong>血圧:</strong> {healthData.bloodPressure}</p>
          <p><strong>脈拍:</strong> {healthData.pulse}</p>
          <p><strong>状態:</strong> {healthData.status}</p>
          <p><strong>更新日:</strong> {healthData.date}</p>
        </div>
        <div className="health-detail-buttons">
          <button className="back-button" onClick={() => navigate(-1)}>
            戻る
          </button>
          <button className="update-button" onClick={handleUpdate}>
            情報を更新する
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthDetail;
