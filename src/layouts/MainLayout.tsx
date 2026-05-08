import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MainLayout() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 4);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isMobileMenuOpen]);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className={`site-header ${isScrolled ? "scrolled" : ""} ${isMobileMenuOpen ? "menu-open" : ""}`}>
                <div className="container">
                    <nav>
                        <div className="logo">
                            <a href="#home">C-ON's Repository</a>
                        </div>
                        <div 
                            className={`menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
                            id="mobile-menu"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </div>
                        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
                            <li><a href="#about" onClick={handleNavClick}>About</a></li>
                            <li><a href="#career" onClick={handleNavClick}>Career</a></li>
                            <li><a href="#license" onClick={handleNavClick}>License</a></li>
                            <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
} 