import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>ForgottenRu</div>
            <input className={styles.search} placeholder="Search" />
            <button className={styles.profile}>Войти</button>
        </header>
    );
};

export default Header;