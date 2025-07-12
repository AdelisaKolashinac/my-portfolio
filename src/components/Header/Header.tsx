"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (!mounted) return null;

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`${styles.nav} ${pathname === "/" ? styles.transparent : ""}`}
    >
      <Link href="/" className={styles.logo}>
        MyPortfolio
      </Link>

      {/* Mobile menu icon */}
      <div
        className={styles["menu-icon"]}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </div>

      {/* Navigation Links */}
      <div className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        <Link href="/" className={isActive("/") ? styles.active : ""}>
          Home
        </Link>
        <Link
          href="/projects"
          className={isActive("/projects") ? styles.active : ""}
        >
          Projects
        </Link>
        <Link href="/about" className={isActive("/about") ? styles.active : ""}>
          About
        </Link>
        <Link
          href="/contact"
          className={isActive("/contact") ? styles.active : ""}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
