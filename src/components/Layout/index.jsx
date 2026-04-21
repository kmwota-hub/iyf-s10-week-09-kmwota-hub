import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Layout.module.css';

export const Header = () => (
    <header className={styles.header}>
        <Link to="/" className={styles.logo}>CommunityHub</Link>
        <nav className={styles.nav}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Home</NavLink>
            <NavLink to="/posts" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Posts</NavLink>
            <NavLink to="/create-post" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>Create</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : styles.navLink}>About</NavLink>
        </nav>
    </header>
);

export const Sidebar = ({ children }) => (
    <aside className={styles.sidebar}>
        {children}
    </aside>
);

export const Footer = () => (
    <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} CommunityHub. Built with React.</p>
    </footer>
);

export const Layout = ({ children, sidebar }) => (
    <div className={styles.container}>
        <Header />
        <main className={styles.mainWrapper}>
            <div className={styles.content}>
                {children}
            </div>
            {sidebar && <Sidebar>{sidebar}</Sidebar>}
        </main>
        <Footer />
    </div>
);
