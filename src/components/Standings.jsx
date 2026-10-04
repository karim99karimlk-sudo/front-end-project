import { Link } from 'react-router';
import './Standings.css';

import Waf from '../pages/USMO IMG/botola2teams/WAF.png';
import Usym from '../pages/USMO IMG/botola2teams/Usym.png';
import Izk from '../pages/USMO IMG/botola2teams/Izk.png';
import Usmo from '../pages/USMO IMG/botola2teams/Usmo.png';
import Jsm from '../pages/USMO IMG/botola2teams/Jsm.png';


// Team metadata map with full names and logo URLs
const TEAMS_INFO = {
  WAF: { name: 'Wydad Fes', logo: Waf },
  USYM: { name: 'USYM', logo: Usym },
  IZK: { name: 'IZK', logo: Izk },
  USMO: { name: 'USM Oujda', logo: Usmo },
  JSM: { name: 'Massira', logo: Jsm }
};

export default function Standings() {
  const standingsData = [
    { rank: 1, team: 'WAF', played: 2, won: 2, drawn: 0, lost: 0, gf: 4, ga: 0, gd: 4, points: 6, isActive: false },
    { rank: 2, team: 'USYM', played: 2, won: 2, drawn: 0, lost: 0, gf: 3, ga: 0, gd: 3, points: 6, isActive: false },
    { rank: 3, team: 'IZK', played: 2, won: 2, drawn: 0, lost: 0, gf: 3, ga: 1, gd: 2, points: 6, isActive: false },
    { rank: 4, team: 'USMO', played: 2, won: 2, drawn: 0, lost: 0, gf: 3, ga: 1, gd: 2, points: 6, isActive: true },
    { rank: 5, team: 'JSM', played: 2, won: 1, drawn: 1, lost: 0, gf: 2, ga: 1, gd: 1, points: 4, isActive: false },
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

          {standingsData.map((item) => {
            const info = TEAMS_INFO[item.team];

            return (
              <div
                className={`table-row ${item.isActive ? 'active' : ''}`}
                key={item.rank}
              >
                <span className="rank-num">{item.rank}</span>
                <span className="team-col">
                  <div className="team-info">
                    {info?.logo && (
                      <img
                        src={info.logo}
                        alt={info.name || item.team}
                        className="team-badge"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                    <span className="team-name">{info?.name || item.team}</span>
                  </div>
                </span>
                <span>{item.played}</span>
                <span className="hide-mobile">{item.won}</span>
                <span className="hide-mobile">{item.drawn}</span>
                <span className="hide-mobile">{item.lost}</span>
                <span className="hide-mobile">{item.gf}</span>
                <span className="hide-mobile">{item.ga}</span>
                <span>{item.gd}</span>
                <span className="pts-col">{item.points}</span>
              </div>
            );
          })}
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