import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Resume", to: "resume" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      ref={navRef}
      role="navigation"
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-primary/95 backdrop-blur-md py-3 shadow-xl"
        : "bg-primary py-5"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          role="link"
          tabIndex={0}
          className="text-2xl font-bold tracking-tight cursor-pointer text-white"
          aria-label="Go to Home"
        >
          <img src="Signature.png" alt="Logo" className="w-20 h-15" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden  font-bold lg:flex items-center gap-x-10">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                role="link"
                tabIndex={0}
                activeClass="text-[#019d91] animate-fadeout "
                className="text-white hover:text-[#019d91] cursor-pointer transition-all duration-300 uppercase text-sm tracking-widest pb-1"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Resume Button */}

        </ul>
        <ul>
          <li>
            <a href='/Resume.pdf' download>  <button className="group relative w-[150px] h-[40px] overflow-hidden border border-[#17795E] bg-[#019d91] text-white text-lg font-semibold flex items-center cursor-pointer transition-all duration-300 hover:bg-[#17795E] active:border-[#146c54]">
              <span className="absolute left-[22px] transition-all duration-300 group-hover:text-transparent">
                Resume
              </span>
              <span className="absolute right-0 w-[39px]  h-full bg-[#17795E] flex items-center justify-center transition-all duration-300 group-hover:w-full group-hover:right-auto group-hover:left-0 group-active:bg-[#146c54]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  className="w-5 fill-white"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button></a>

          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none z-[60]"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-primary flex flex-col items-center justify-center lg:hidden transition-transform transition-opacity duration-500 ease-in-out ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            }`}
        >
          <ul className="flex flex-col items-center gap-y-8 text-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  role="link"
                  tabIndex={0}
                  className="text-2xl text-white hover:text-secondary transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Resume Button for Mobile */}
            <li>
              <a
                href="/resume.pdf"
                download
                className="text-2xl text-white hover:text-secondary transition-all"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
