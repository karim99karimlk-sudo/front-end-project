import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Matches.css';

import BotolaProLogo from './USMO IMG/Icons/botolapro2.svg';
import UnknownTeamLogo from './USMO IMG/Icons/unknown.team.png';
import USMOLogo from '../pages/USMO IMG/logo/cropped_circle_image.png';
export default function Matches() {
  // Target date for the upcoming match
  const upcomingMatchDate = new Date('2026-10-15T20:00:00');

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +upcomingMatchDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Mock data for upcoming/recent matches list (Left side - 4 matches)
  const otherMatches = [
    {
      id: 1,
      round: 'الدورة 2',
      date: '2026-09-28',
      team1: { name: 'USMO', logo: USMOLogo },
      team2: { name: 'SCCM', logo: UnknownTeamLogo },
      score: '2 - 1',
      finished: true,
      highlights: '#',
    },
    {
      id: 2,
      round: 'الدورة 3',
      date: '2026-10-04',
      team1: { name: 'MAS', logo: UnknownTeamLogo },
      team2: { name: 'USMO', logo: USMOLogo },
      score: '0 - 0',
      finished: true,
      highlights: '#',
    },
    {
      id: 3,
      round: 'الدورة 4',
      date: '2026-10-22',
      team1: { name: 'USMO', logo: USMOLogo },
      team2: { name: 'WAC', logo: UnknownTeamLogo },
      score: 'VS',
      finished: false,
    },
    {
      id: 4,
      round: 'الدورة 5',
      date: '2026-10-30',
      team1: { name: 'RCA', logo: UnknownTeamLogo },
      team2: { name: 'USMO', logo: USMOLogo },
      score: 'VS',
      finished: false,
    },
  ];

  return (
    <section className="matches-section" dir="rtl">
      <div className="section-header">
        <h2>جدول المباريات</h2>
        <p className="subtitle">تابع مباريات وتغطيات النادي الرياضي</p>
      </div>

      <div className="matches-container">
        {/* RIGHT SIDE: Main Next Match Card */}
        <div className="main-match-card">
          <div className="badge-title">المباراة القادمة</div>

          <div className="main-card-body">
            {/* Background League Logo overlay */}
            <div className="tournament-bg">
              <img src={BotolaProLogo} alt="البطولة الوطنية" />
            </div>

            <div className="tournament-info">
              <span className="league-name">البطولة الوطنية الاحترافية</span>
              <span className="round-tag">الدورة 1</span>
            </div>

            {/* Teams Faceoff */}
            <div className="main-teams">
              <div className="team">
                <div className="logo-wrapper">
                  <img src={USMOLogo} alt="USMO" />
                </div>
                <span className="team-name">USMO</span>
              </div>

              <div className="vs-badge">VS</div>

              <div className="team">
                <div className="logo-wrapper">
                  <img src={UnknownTeamLogo} alt="MCO" />
                </div>
                <span className="team-name">MCO</span>
              </div>
            </div>

            {/* Match Meta Info */}
            <div className="match-meta">
              <div className="meta-item">
                <i className="fa-regular fa-calendar-days"></i>
                <span>الأحد 15 أكتوبر 2026</span>
              </div>
              <div className="meta-item">
                <i className="fa-regular fa-clock"></i>
                <span>20:00 بتوقيت المغرب</span>
              </div>
              <div className="meta-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>الملعب البلدي وجدة</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="countdown-container">
              <span className="countdown-title">العد التنازلي للمباراة</span>
              <div className="countdown-boxes">
                <div className="time-box">
                  <span className="number">{timeLeft.days || 0}</span>
                  <span className="label">يوم</span>
                </div>
                <div className="time-box">
                  <span className="number">{timeLeft.hours || 0}</span>
                  <span className="label">ساعة</span>
                </div>
                <div className="time-box">
                  <span className="number">{timeLeft.minutes || 0}</span>
                  <span className="label">دقيقة</span>
                </div>
                <div className="time-box">
                  <span className="number">{timeLeft.seconds || 0}</span>
                  <span className="label">ثانية</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LEFT SIDE: 4 Column Cards */}
        <div className="side-matches-list">
          <div className="list-title">المباريات الأخرى</div>
          
          <div className="side-cards-wrapper">
            {otherMatches.map((match) => (
              <div className="side-match-card" key={match.id}>
                <div className="side-card-info">
                  <span className="side-round">{match.round}</span>
                  <span className="side-date">{match.date}</span>
                </div>

                <div className="side-match-teams">
                  <div className="side-team">
                    <img src={match.team1.logo} alt={match.team1.name} />
                    <span>{match.team1.name}</span>
                  </div>

                  <div className="side-score">{match.score}</div>

                  <div className="side-team">
                    <img src={match.team2.logo} alt={match.team2.name} />
                    <span>{match.team2.name}</span>
                  </div>
                </div>

                {match.finished && match.highlights && (
                  <Link to={match.highlights} className="side-highlight-btn" title="ملخص المباراة">
                    <i className="fa-solid fa-play"></i> الملخص
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="full-schedule-wrapper">
        <Link to="/schedule" className="full-schedule-link">
          عرض الجدول الكامل للمباريات <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>
    </section>
  );
}