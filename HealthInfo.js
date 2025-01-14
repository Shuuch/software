import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // ヘッダーをインポート
import './HealthInfo.css';

const HealthInfo = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        { id: 1, name: '佐藤 太郎', age: 45, healthStatus: '良好' },
        { id: 2, name: '鈴木 花子', age: 38, healthStatus: '軽度の病歴あり' },
        { id: 3, name: '田中 一郎', age: 50, healthStatus: '健康管理中' },
      ];
      setPeople(data);
    };

    fetchData();
  }, []);

  const handlePersonClick = (person) => {
    navigate(`/health-info/${person.id}`, { state: { person } }); // 詳細ページに遷移
  };

  return (
    <div className="health-info-container">
      <Header />
      <h2>健康情報一覧</h2>
      <div className="health-info-list">
        {people.map((person) => (
          <div
            key={person.id}
            className="person-item"
            onClick={() => handlePersonClick(person)}
          >
            <p className="person-name">{person.name} さん</p>
            <p className="person-status">健康状態: {person.healthStatus}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthInfo;
