import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "../styles/components/SideBar.module.css";

export function SideBar() {
  const [isActiveDarkTheme, setIsActiveDarkTheme] = useState(false);
  const { theme, setTheme } = useTheme();

  function toggleDarkTheme() {
    setIsActiveDarkTheme(isActiveDarkTheme ? false : true);
  }

  useEffect(() => {
    setTheme(isActiveDarkTheme ? "dark" : "light");
  }, [isActiveDarkTheme]);

  return (
    <div className={styles.sideBar}>
      <div className={styles.container}>
        <header>
          <img src="/icons/logo.svg" alt="Logo" />
        </header>

        <main>
          <button className={styles.active}>
            <img className={styles.active} src="/icons/home.svg" alt="Home" />
          </button>
          <button>
            <img src="/icons/award.svg" alt="Rankings" />
          </button>
        </main>

        <footer>
          <button className={styles.toggleTheme} onClick={toggleDarkTheme}>
            {isActiveDarkTheme ? (
              <img src="/icons/moon.svg" alt="Dark" />
            ) : (
              <img src="/icons/sun.svg" alt="Light" />
            )}
          </button>
        </footer>
      </div>
    </div>
  );
}
