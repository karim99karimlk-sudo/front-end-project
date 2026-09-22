import { Link } from 'react-router';
import './SquadStyle.css';

// Asset images imports
import AklidouImg from '../pages/USMO IMG/logo/cropped_circle_image.png';
import AzeroualImg from '../pages/USMO IMG/logo/cropped_circle_image.png';
import MahdoubImg from '../pages/USMO IMG/logo/cropped_circle_image.png';
import AmgharImg from '../pages/USMO IMG/logo/cropped_circle_image.png';

export default function Squad() {
  const players = [
    {
      id: 1,
      number: '4',
      name: 'ياشين أكليدو',
      englishName: 'Yassine Aklidou',
      position: 'مدافع',
      image: AklidouImg,
      age: 38,
      height: '1.93م',
      matches: 34,
    },
    {
      id: 2,
      number: '1',
      name: 'مهدي أزروال',
      englishName: 'Mehdi Azeroual',
      position: 'حارس مرمى',
      image: AzeroualImg,
      age: 35,
      height: '1.92م',
      matches: 12,
    },
    {
      id: 3,
      number: '10',
      name: 'بدر محذوب',
      englishName: 'Badr Mahdoub',
      position: 'وسط',
      image: MahdoubImg,
      age: 24,
      height: '1.90م',
      matches: 2,
    },
    {
      id: 4,
      number: '17',
      name: 'عبد الله أمغار',
      englishName: 'Abdelallah Amghar',
      position: 'مهاجم',
      image: AmgharImg,
      age: 19,
      height: '1.88م',
      matches: 0,
    },
  ];

  return (
    <section className="squad-section" dir="rtl">
      <div className="section-header">
        <h2>الفريق الأول</h2>
        <p className="subtitle">تشكيلة لاعبي النادي الرياضي</p>
      </div>

      <div className="player-grid">
        {players.map((player) => (
          <div className="player-card" key={player.id}>
            <div className="player-card-inner">
              {/* Front card Face */}
              <div className="player-card-front">
                <span className="player-number">{player.number}</span>
                <div className="player-image-wrapper">
                  <img src={player.image} alt={player.name} loading="lazy" />
                </div>
                <div className="player-info">
                  <span className="player-position">{player.position}</span>
                  <h3 className="player-name">{player.name}</h3>
                </div>
              </div>

              {/* Back card Face */}
              <div className="player-card-back">
                <div className="back-header">
                  <span className="back-number">#{player.number}</span>
                  <span className="back-english-name">{player.englishName}</span>
                </div>
                <div className="player-stats">
                  <div className="stat-item">
                    <span className="stat-label">العمر</span>
                    <span className="stat-value">{player.age} سنة</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">الطول</span>
                    <span className="stat-value">{player.height}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">المباريات</span>
                    <span className="stat-value">{player.matches}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="team-link-wrapper">
        <Link to="/team" className="full-link">
          عرض الفريق بالكامل <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
    </section>
  );
}