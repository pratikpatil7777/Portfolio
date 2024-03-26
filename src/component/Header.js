"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useTheme } from "@/context/ThemeContext.client";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const [activeSection, setActiveSection] = useState("about");
  // const handleMouseMove = (event, linkName) => {
  //   const btn = event.currentTarget;
  //   const x = event.pageX - btn.offsetLeft;
  //   const y = event.pageY - btn.offsetTop;

  //   setActiveSection(linkName); // Assuming you want to set active section on mouse move, adjust as needed
  //   btn.style.setProperty("--x", `${x}px`);
  //   btn.style.setProperty("--y", `${y}px`);
  // };

  useEffect(() => {
    // Function to detect the current active section based on scroll position
    const handleScroll = () => {
      const sections = [
        "about",
        "projects",
        "skills",
        "experience",
        "education",
        "contact",
      ]; // section IDs
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust as needed

      const currentSection = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          return (
            scrollPosition >= el.offsetTop &&
            scrollPosition <= el.offsetTop + el.offsetHeight
          );
        }
        return false;
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Add a condition to set active tab to "about" when we load the page

  return (
    <header className={styles.header}>
      {/* <Link href="/" className={styles.logo}>
        My Portfolio
      </Link> */}
      <div className={styles.themeToggle}>
        <button
          className={`${styles.toggleButton} ${
            theme === "dark" ? styles.darkMode : ""
          }`}
          onClick={toggleTheme}
        >
          <span className={styles.toggleKnob}></span>
        </button>
      </div>

      <button onClick={toggleNavbar} className={styles.navToggle}>
        ☰
      </button>
      <nav className={`${styles.navbar} ${isOpen ? styles.show : ""}`}>
        <a
          href="#about"
          className={activeSection === "about" ? styles.active : styles.link}
          // onMouseMove={(e) => handleMouseMove(e, "about")}
        >
          About Me
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? styles.active : styles.link}
          // onMouseMove={(e) => handleMouseMove(e, "projects")}
        >
          Projects
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? styles.active : styles.link}
        >
          Skills
        </a>
        <a
          href="#experience"
          className={
            activeSection === "experience" ? styles.active : styles.link
          }
        >
          Experience
        </a>
        <a
          href="#education"
          className={
            activeSection === "education" ? styles.active : styles.link
          }
        >
          Education
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? styles.active : styles.link}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
