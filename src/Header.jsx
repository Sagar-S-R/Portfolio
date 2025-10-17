import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "skills", "about-me", "contacts"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // measure header height and set CSS variable so page content can offset
  const headerRef = useRef(null);
  useEffect(() => {
    const setHeaderHeight = () => {
      const h = headerRef.current ? headerRef.current.offsetHeight : 80;
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    };

    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);
    return () => window.removeEventListener('resize', setHeaderHeight);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  return (
    <>
      <div 
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'active' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <header ref={headerRef} className="header-main">
        <div className="page-container">
          <div className="header-content">
          <button 
            onClick={() => scrollToSection("home")}
            className="logo-button"
          >
            <Logo className="logo-icon" />
            <span className="logo-text">Sagar S R</span>
          </button>

          <nav className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <button
              onClick={() => scrollToSection("home")}
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            >
              <span className="nav-hash">#</span>home
            </button>

            <button
              onClick={() => scrollToSection("experience")}
              className={`nav-link ${activeSection === "experience" ? "active" : ""}`}
            >
              <span className="nav-hash">#</span>experience
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
            >
              <span className="nav-hash">#</span>projects
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
            >
              <span className="nav-hash">#</span>skills
            </button>

            <button
              onClick={() => scrollToSection("about-me")}
              className={`nav-link ${activeSection === "about-me" ? "active" : ""}`}
            >
              <span className="nav-hash">#</span>about-me
            </button>

            <button
              onClick={() => scrollToSection("contacts")}
              className={`nav-link ${activeSection === "contacts" ? "active" : ""}`}
            >
              <span className="nav-hash">#</span>contacts
            </button>

            <div className="nav-divider"></div>

            <a 
              href="https://github.com/Sagar-S-R" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="GitHub"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
              </svg>
            </a>

            <a 
              href="https://www.linkedin.com/in/sagar-s-r/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
              </svg>
            </a>
          </nav>

          <button 
            className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
    </>
  );
}
