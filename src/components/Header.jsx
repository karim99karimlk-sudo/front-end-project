import { Link } from 'react-router'
import { useState } from 'react';
import Badge from '../pages/USMO IMG/logo/cropped_circle_image.png'
 // Update path to match your badge location
import './Header.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header-container">
      {/* Header */}
      <header>
        <div className="logo">
          <Link to="/">الإتحاد</Link>
        </div>

        <i
          className="fa-solid fa-bars menu-btn"
          id="menu-btn"
          onClick={toggleMenu}
        ></i>

        <div
          className={`nav-overlay ${isMenuOpen ? 'active' : ''}`}
          id="nav-overlay"
          onClick={closeMenu}
        ></div>

        <nav id="nav" className={isMenuOpen ? 'active' : ''}>
          <button
            type="button"
            className="close-btn"
            id="close-btn"
            aria-label="Close navigation"
            onClick={closeMenu}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <ul>
            <li>
              <Link to="/" className="active" onClick={closeMenu}>
                الرئيسية
              </Link>
            </li>
           
            <li>
              <Link to="/history" onClick={closeMenu}>
                التاريخ
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={closeMenu}>
                الفريق
              </Link>
            </li>
            <li>
              <Link to="/schedule" onClick={closeMenu}>
                الجدول
              </Link>
            </li>
            <li>
              <Link to="/standings" onClick={closeMenu}>
                الترتيب
              </Link>
            </li>
          </ul>
        </nav>

        <div className="badge">
          <img src={Badge} alt="Badge" />
        </div>
      </header>
    </div>
  );
}