"use client";
import Image from "next/image";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import "../app/globals.css";
// import "../styles/globals.scss";
import { ThemeProvider, useTheme } from "../context/ThemeContext.client";
import About from "@/section/About";
import Projects from "@/section/Projects.js";
import Skills from "@/section/Skills";
import Experience from "@/section/Experience";
import Education from "@/section/Education";
import Contact from "@/section/Contact";

export default function App({ children }) {
  // const { theme, toggleTheme } = useTheme();
  return (
    <ThemeProvider>
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}

function Layout({ children }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
