"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          MyPortfolio
        </Link>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`${styles.nav} ${pathname === "/" ? styles.transparent : ""}`}
    >
      <Link href="/" className={styles.logo}>
        MyPortfolio
      </Link>
      <div className={styles.links}>
        <Link href="/" className={`${pathname === "/" ? styles.active : ""}`}>
          Home
        </Link>
        <Link
          href="/projects"
          className={`${pathname === "/projects" ? styles.active : ""}`}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className={`${pathname === "/about" ? styles.active : ""}`}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`${pathname === "/contact" ? styles.active : ""}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
