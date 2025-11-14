import React from "react";
import { Link } from "react-router-dom";   // React Router Link

export default function Navbar() {
  return (
    <>
      <header className="navbar">

        {/* ---------- LOGO ---------- */}
        <div className="logo">
          <img src="/images/logo.png" alt="Veloura Logo" className="logo-img" />
          <span>Veloura</span>
        </div>

        {/* ---------- NAVBAR MENU ---------- */}
        <nav className="navbar-menu">

          {/* Skincare */}
          <div className="dropdown">
            <span className="dropdown-label">Skincare</span>

            <div className="mega-menu">
              <div className="mega-column">
                <h4>Face Care</h4>
                <ul>
                  <li><Link to="/facemoisturizer">Face Moisturizer</Link></li>
                  <li><Link to="/cleansers">Cleansers</Link></li>
                  <li><Link to="/serum">Serum</Link></li>
                  <li><Link to="/toner">Toners</Link></li>
                  <li><Link to="/sunscreen">Sunscreens</Link></li>
                  <li><Link to="/mask">Masks</Link></li>
                </ul>
              </div>

              <div className="mega-column">
                <h4>Lip Care</h4>
                <ul>
                  <li><Link to="/lipbalm">Lip Balm</Link></li>
                  <li><Link to="/lipscrub">Lip Scrub</Link></li>
                  <li><Link to="/lipmasks">Lip Masks</Link></li>
                </ul>
              </div>

              <div className="mega-column">
                <h4>Body Care</h4>
                <ul>
                  <li><Link to="/lotionscreams">Lotions & Creams</Link></li>
                  <li><Link to="/bodyscrubs">Body Scrubs</Link></li>
                  <li><Link to="/bodysunscreens">Body Sunscreens</Link></li>
                  <li><Link to="/soapsbodywash">Soaps & Body Wash</Link></li>
                </ul>
              </div>

              <div className="mega-column">
                <h4>Eye Care</h4>
                <ul>
                  <li><Link to="/undereyecreams">Undereye Creams</Link></li>
                  <li><Link to="/eyemasks">Eye Masks</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Makeup */}
          <div className="dropdown">
            <span className="dropdown-label">Makeup</span>

            <div className="mega-menu">
              <div className="mega-column">
                <h4>Face</h4>
                <ul>
                  <li><Link to="/foundation">Foundation</Link></li>
                  <li><Link to="/concealer">Concealer</Link></li>
                  <li><Link to="/primer">Primer</Link></li>
                  <li><Link to="/highlighter">Highlighter</Link></li>
                </ul>
              </div>

              <div className="mega-column">
                <h4>Eyes</h4>
                <ul>
                  <li><Link to="/mascara">Mascara</Link></li>
                  <li><Link to="/eyeliner">Eyeliner</Link></li>
                  <li><Link to="/eyeshadow">Eyeshadow</Link></li>
                  <li><Link to="/kajal">Kajal</Link></li>
                </ul>
              </div>

              <div className="mega-column">
                <h4>Lips</h4>
                <ul>
                  <li><Link to="/lipstick">Lipstick</Link></li>
                  <li><Link to="/lipgloss">Lip Gloss</Link></li>
                  <li><Link to="/lipliner">Lip Liner</Link></li>
                  <li><Link to="/liptints">Lip Tints</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fragrance */}
          <div className="dropdown">
            <span className="dropdown-label">Fragrances</span>

            <div className="mega-menu">
              <div className="mega-column">
                <h4>By Type</h4>
                <ul>
                  <li><Link to="/perfume">Perfume</Link></li>
                  <li><Link to="/bodymists">Body Mists</Link></li>
                  <li><Link to="/rollons">Roll-ons</Link></li>
                </ul>
              </div>

              <div className="mega-column">
                <h4>By Gender</h4>
                <ul>
                  <li><Link to="/forwomen">For Women</Link></li>
                  <li><Link to="/formen">For Men</Link></li>
                  <li><Link to="/unisex">Unisex</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="nav-links">
            <Link to="/tools">Tools</Link>
          </div>

        </nav>

        {/* ---------- SEARCH + ICONS ---------- */}
        <div className="icons">
          <input
            type="text"
            placeholder="Search..."
            id="search-input"
          />

          <Link to="/signin"><span className="icon">👤</span></Link>

          <Link to="/cart">
            <span className="icon cart">
              🛒 <span className="badge" id="cart-count">0</span>
            </span>
          </Link>
        </div>

      </header>

      {/* ---------- BREADCRUMB ---------- */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link> ›
        <Link to="/foundation">Makeup</Link> ›
        <span>Foundation</span>
      </nav>
    </>
  );
}
