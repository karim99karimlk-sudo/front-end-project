import './StandingsPage.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Waf from './USMO IMG/botola2teams/WAF.png';
import Usym from './USMO IMG/botola2teams/Usym.png';
import Izk from './USMO IMG/botola2teams/Izk.png';
import Usmo from './USMO IMG/botola2teams/Usmo.png';
import Jsm from './USMO IMG/botola2teams/Jsm.png';
import Ocs from './USMO IMG/botola2teams/Ocs.png';
import Ock from './USMO IMG/botola2teams/Ock.png';
import Cjbg from './USMO IMG/botola2teams/Cjbg.png';
import Mco from './USMO IMG/botola2teams/Mco.png';
import Od from './USMO IMG/botola2teams/Od.png';
import Jss from './USMO IMG/botola2teams/Jss.png';
import Usb from './USMO IMG/botola2teams/Usb.png';
import Sm from './USMO IMG/botola2teams/Sm.png';
import Kac from './USMO IMG/botola2teams/Kac.png';
import Sccm from './USMO IMG/botola2teams/Sccm.png';
import Cak from './USMO IMG/botola2teams/Cak.png';
// Team metadata map with full names and logo URLs
const TEAMS_INFO = {
  WAF: { name: 'Wydad Fes', logo: Waf },
  USYM: { name: 'USYM', logo: Usym },
  IZK: { name: 'IZK', logo: Izk },
  USMO: { name: 'USM Oujda', logo: Usmo },
  JSM: { name: 'Massira', logo: Jsm },
  OCS: { name: 'OC Safi', logo: Ocs },
  OCK: { name: 'OC Khouribga', logo: Ock },
  CJBG: { name: 'CJBG', logo: Cjbg },
  MCO: { name: 'MC Oujda', logo: Mco },
  OD: { name: 'Dcheira', logo: Od },
  JSS: { name: 'JS Soualem  ', logo: Jss },
  USB: { name: 'USB', logo: Usb },
  SM: { name: 'Stade Marocain', logo: Sm },
  KAC: { name: 'KAC Kenitra', logo: Kac },
  SCCM: { name: 'SCCM', logo: Sccm },
  CAK: { name: 'CAK', logo: Cak },
};

export function StandingsPage() {
  const standingsData = [
    { rank: 1, team: 'WAF', played: 2, won: 2, drawn: 0, lost: 0, gf: 4, ga: 0, gd: 4, points: 6, isActive: false },
    { rank: 2, team: 'USYM', played: 2, won: 2, drawn: 0, lost: 0, gf: 3, ga: 0, gd: 3, points: 6, isActive: false },
    { rank: 3, team: 'IZK', played: 2, won: 2, drawn: 0, lost: 0, gf: 3, ga: 1, gd: 2, points: 6, isActive: false },
    { rank: 4, team: 'USMO', played: 2, won: 2, drawn: 0, lost: 0, gf: 3, ga: 1, gd: 2, points: 6, isActive: true },
    { rank: 5, team: 'JSM', played: 2, won: 1, drawn: 1, lost: 0, gf: 2, ga: 1, gd: 1, points: 4, isActive: false },
    { rank: 6, team: 'OCS', played: 2, won: 1, drawn: 1, lost: 0, gf: 1, ga: 0, gd: 1, points: 4, isActive: false },
    { rank: 7, team: 'OCK', played: 2, won: 1, drawn: 0, lost: 1, gf: 4, ga: 1, gd: 3, points: 3, isActive: false },
    { rank: 8, team: 'CJBG', played: 2, won: 1, drawn: 0, lost: 1, gf: 2, ga: 1, gd: 1, points: 3, isActive: false },
    { rank: 9, team: 'MCO', played: 2, won: 1, drawn: 0, lost: 1, gf: 3, ga: 3, gd: 0, points: 3, isActive: false },
    { rank: 10, team: 'OD', played: 2, won: 1, drawn: 0, lost: 1, gf: 2, ga: 2, gd: 0, points: 3, isActive: false },
    { rank: 11, team: 'JSS', played: 2, won: 0, drawn: 1, lost: 1, gf: 0, ga: 2, gd: -2, points: 1, isActive: false },
    { rank: 12, team: 'USB', played: 2, won: 0, drawn: 1, lost: 1, gf: 0, ga: 3, gd: -3, points: 1, isActive: false },
    { rank: 13, team: 'SM', played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 3, gd: -2, points: 0, isActive: false },
    { rank: 14, team: 'KAC', played: 2, won: 0, drawn: 0, lost: 2, gf: 0, ga: 2, gd: -2, points: 0, isActive: false },
    { rank: 15, team: 'SCCM', played: 2, won: 0, drawn: 0, lost: 2, gf: 0, ga: 3, gd: -3, points: 0, isActive: false },
    { rank: 16, team: 'CAK', played: 2, won: 0, drawn: 0, lost: 2, gf: 1, ga: 6, gd: -5, points: 0, isActive: false },
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
      </section>

      <Footer />
    </>
  );
}