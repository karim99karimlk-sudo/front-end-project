import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './SchedulePage.css'

// Schedules data object
const schedules = {
  '26-27': {
    matches: [
      ['الدورة 1', '--', '🏠', 'MCO', ''],
      ['الدورة 2', '--', '✈️', 'SCCM', '', '#'],
      ['الدورة 3', '--', '🏠', 'OCS', '', '#'],
      ['الدورة 4', '--', '✈️', 'WAF', '', '#'],
      ['الدورة 5', '--', '🏠', 'JSS', '', '#'],
      ['الدورة 6', '--', '✈️', 'KAC', '', '#'],
      ['الدورة 7', '--', '🏠', 'USB', '', '#'],
      ['الدورة 8', '--', '✈️', 'USYM', '', '#'],
      ['الدورة 9', '--', '🏠', 'JSM', '', '#'],
      ['الدورة 10', '--', '✈️', 'OD', '', '#'],
      ['الدورة 11', '--', '✈️', 'CJBG', '', '#'],
      ['الدورة 12', '--', '🏠', 'IZK', '', '#'],
      ['الدورة 13', '--', '✈️', 'SM', '', '#'],
      ['الدورة 14', '--', '🏠', 'CAK', '', '#'],
      ['الدورة 15', '--', '✈️', 'OCK', '', '#'],
      ['الدورة 16', '--', '✈️', 'MCO', '', '#'],
      ['الدورة 17', '--', '🏠', 'SCCM', '', '#'],
      ['الدورة 18', '--', '✈️', 'OCS', '', '#'],
      ['الدورة 19', '--', '🏠', 'WAF', '', '#'],
      ['الدورة 20', '--', '✈️', 'JSS', '', '#'],
      ['الدورة 21', '--', '🏠', 'KAC', '', '#'],
      ['الدورة 22', '--', '✈️', 'USB', '', '#'],
      ['الدورة 23', '--', '🏠', 'USYM', '', '#'],
      ['الدورة 24', '--', '✈️', 'JSM', '', '#'],
      ['الدورة 25', '--', '🏠', 'OD', '', '#'],
      ['الدورة 26', '--', '🏠', 'CJBG', '', '#'],
      ['الدورة 27', '--', '✈️', 'IZK', '', '#'],
      ['الدورة 28', '--', '🏠', 'SM', '', '#'],
      ['الدورة 29', '--', '✈️', 'CAK', '', '#'],
      ['الدورة 30', '--', '🏠', 'OCK', '', '#'],
    ],
  },
  '25-26': {
    matches: [
      ['الدورة 1', '15:00 - 25/09/28', '✈️', 'JSM', '1-<strong>0</strong>', '#'],
      ['الدورة 2', '15:00 - 25/10/05', '🏠', 'SCCM', '<strong>1</strong>-1', '#'],
      ['الدورة 3', '15:00 - 25/10/12', '✈️', 'RBM', '0-<strong>0</strong>', '#'],
      ['الدورة 4', '15:00 - 25/10/18', '🏠', 'KAC', '<strong>1</strong>-1', '#'],
      ['الدورة 5', '15:00 - 25/10/25', '✈️', 'USAT', '2-<strong>0</strong>', '#'],
      ['الدورة 6', '20:00 - 25/11/01', '✈️', 'CJBG', '1-<strong>2</strong>', '#'],
      ['الدورة 7', '16:00 - 25/11/09', '🏠', 'SM', '<strong>0</strong>-1', '#'],
      ['الدورة 8', '15:00 - 25/11/15', '✈️', 'WAF', '2-<strong>0</strong>', '#'],
      ['الدورة 9', '16:00 - 25/11/23', '🏠', 'MAT', '<strong>3</strong>-0', '#'],
      ['الدورة 10', '15:00 - 25/11/30', '✈️', 'RAC', '0-<strong>3</strong>', '#'],
      ['الدورة 11', '16:00 - 25/12/06', '🏠', 'MCO', '<strong>0</strong>-3', '#'],
      ['الدورة 12', '16:00 - 26/01/25', '✈️', 'USB', '2-<strong>2</strong>', '#'],
      ['الدورة 13', '16:00 - 26/01/31', '🏠', 'JSS', '<strong>3</strong>-2', '#'],
      ['الدورة 14', '15:00 - 26/02/07', '✈️', 'CAK', '1-<strong>2</strong>', '#'],
      ['الدورة 15', '15:00 - 26/02/14', '🏠', 'WST', '<strong>0</strong>-0', '#'],
      ['الدورة 16', '15:00 - 26/02/21', '🏠', 'JSM', '<strong>1</strong>-1', '#'],
      ['الدورة 17', '22:00 - 26/03/01', '✈️', 'SCCM', '1-<strong>0</strong>', '#'],
      ['الدورة 18', '15:00 - 26/03/08', '🏠', 'RBM', '<strong>3</strong>-0', '#'],
      ['الدورة 19', '15:00 - 26/03/14', '✈️', 'KAC', '0-<strong>0</strong>', '#'],
      ['الدورة 20', '15:00 - 26/03/29', '🏠', 'USAT', '<strong>0</strong>-0', '#'],
      ['الدورة 21', '15:00 - 26/04/05', '🏠', 'CJBG', '<strong>1</strong>-1', '#'],
      ['الدورة 22', '16:00 - 26/04/26', '✈️', 'SM', '1-<strong>0</strong>', '#'],
      ['الدورة 23', '16:00 - 26/05/02', '🏠', 'WAF', '<strong>1</strong>-0', '#'],
      ['الدورة 24', '16:00 - 26/05/10', '✈️', 'MAT', '2-<strong>0</strong>', 'https://www.youtube.com/watch?v=cU6iGN5rxL8'],
      ['الدورة 25', '16:00 - 26/05/24', '🏠', 'RAC', '<strong>3</strong>-1', 'https://www.youtube.com/watch?v=H4Emwwroln0&t=164s'],
      ['الدورة 26', '16:00 - 26/06/06', '✈️', 'MCO', '2-<strong>1</strong>', 'video.html?v=H4Emwwroln0&t=16s'],
      ['الدورة 27', '16:00 - 26/06/13', '🏠', 'USB', '<strong>1</strong>-0', 'video.html?v=H4Emwwroln0&t=164s'],
      ['الدورة 28', '16:00 - 26/06/20', '✈️', 'JSS', '2-<strong>0</strong>', '#'],
      ['الدورة 29', '16:00 - 26/06/27', '🏠', 'CAK', '<strong>1</strong>-1', '#'],
      ['الدورة 30', '16:00 - 26/07/05', '✈️', 'WST', '0-<strong>1</strong>', '#'],
    ],
  },
};

// Helper function to evaluate match result class
function getResultClass(scoreString) {
  if (!scoreString) return 'draw';

  let us = 0;
  let them = 0;
  const hasStrong = scoreString.includes('<strong>');

  if (hasStrong) {
    us = Number(scoreString.match(/<strong>(\d+)<\/strong>/)?.[1] || 0);
    them = Number(
      scoreString
        .replace(/<strong>\d+<\/strong>/, '')
        .replace('-', '')
    );
  } else {
    const parts = scoreString.split('-').map(Number);
    us = parts[0] || 0;
    them = parts[1] || 0;
  }

  if (us > them) return 'win';
  if (us < them) return 'loss';
  return 'draw';
}

export function SchedulePage() {
  const [selectedSeason, setSelectedSeason] = useState('26-27');

  const currentMatches = schedules[selectedSeason]?.matches || [];

  return (
    <>
    <title>Schedule</title>

    <Header />

    <div className="schedule-container">
      <div className="schedule-top">
        <h2>البطولة الإحترافية للقسم الوطني 2</h2>
        <select
          id="seasonSelect"
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value)}
        >
          <option value="26-27"> الجدول لموسم 2026-2027 </option>
          <option value="25-26"> الجدول لموسم 2025-2026 </option>
        </select>
      </div>

      <table className="schedule-table">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>د</th>
            <th>
              <span className="icon center">🗓️</span>
            </th>
            <th>
              <span className="icon center">📍</span>
            </th>
            <th>الخصم</th>
            <th>
              <span className="icon center">🥅</span>
            </th>
          </tr>
        </thead>
        <tbody id="scheduleBody">
          {currentMatches.map((match, index) => {
            const scoreString = match[4] || '';
            const resultClass = getResultClass(scoreString);

            return (
              <tr key={index} className={index % 2 !== 0 ? 'alt-row' : ''}>
                <td>{match[0]}</td>
                <td>{match[1]}</td>
                <td>{match[2]}</td>
                <td>{match[3]}</td>
                <td>
                  <span
                    className={`score ${resultClass}`}
                    dangerouslySetInnerHTML={{ __html: scoreString }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

    <Footer />
    </>
    
  );
}