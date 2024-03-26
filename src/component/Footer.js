"use client";
import React from "react";
import styles from "./Footer.module.scss";
import { useTheme } from "@/context/ThemeContext.client";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} MyPortfolio. All rights reserved.
    </footer>
  );
};

export default Footer;
