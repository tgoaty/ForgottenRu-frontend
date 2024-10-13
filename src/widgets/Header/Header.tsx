import styles from "./Header.module.css";
import Search from "../../features/Search/Search.tsx";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>ForgottenRu</div>
            <Search/>
            <button className={styles.profile}>Войти</button>
        </header>
    );
};

export default Header;