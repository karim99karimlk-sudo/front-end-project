import { Link } from 'react-router';
import './Standings.css';

export default function Standings() {
  const standingsData = [
    { rank: 1, team: 'USMO', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: true },
    { rank: 2, team: 'WAF',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
    { rank: 3, team: 'CAK',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
    { rank: 4, team: 'JSS',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
    { rank: 5, team: 'OCS',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  ];

  return (
    <section className="standings-section" dir="rtl">
      <div className="section-header">
        <h2>ترتيب البطولة الاحترافية للقسم الوطني 2</h2>
        <p className="subtitle">جدول الترتيب المباشر للأندية</p>
      </div>

      <div className="table-container">
        <div className="table">
          <div className="table-header">
            <span>#</span>
            <span className="team-col">الفريق</span>
            <span>ل</span>
            <span className="hide-mobile">ف</span>
            <span className="hide-mobile">ت</span>
            <span className="hide-mobile">خ</span>
            <span className="hide-mobile">ل</span>
            <span className="hide-mobile">ع</span>
            <span>-/+</span>
            <span className="pts-col">النقاط</span>
          </div>

          {standingsData.map((item) => (
            <div
              className={`table-row ${item.isActive ? 'active' : ''}`}
              key={item.rank}
            >
              <span className="rank-num">{item.rank}</span>
              <span className="team-col">{item.team}</span>
              <span>{item.played}</span>
              <span className="hide-mobile">{item.won}</span>
              <span className="hide-mobile">{item.drawn}</span>
              <span className="hide-mobile">{item.lost}</span>
              <span className="hide-mobile">{item.gf}</span>
              <span className="hide-mobile">{item.ga}</span>
              <span>{item.gd}</span>
              <span className="pts-col">{item.points}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="full-link-wrapper">
        <Link to="/standings" className="full-link">
          عرض الترتيب الكامل <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
    </section>
  );
}