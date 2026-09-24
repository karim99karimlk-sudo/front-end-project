import './StandingsPage.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function StandingsPage() {
  const standingsData = [
  { rank: 1, team: 'USMO', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: true },
  { rank: 2, team: 'OCS',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 3, team: 'OD',   played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 4, team: 'JSM',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 5, team: 'CAK',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 6, team: 'JSS',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 7, team: 'SM',   played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 8, team: 'WAF',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 9, team: 'MCO',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 10, team: 'OCK', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 11, team: 'CJBG', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 12, team: 'SCCM', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 13, team: 'KAC',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 14, team: 'USB',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 15, team: 'IZK',  played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
  { rank: 16, team: 'USYM', played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0, isActive: false },
];

  return (
    <>
    <Header />
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
    </section>

    <Footer />
    </>
    
  );
}