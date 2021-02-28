import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import styles from "../styles/components/Notification.module.css";

export function Notification() {
  const { activeChallenge } = useContext(ChallengesContext);

  return (
    <div>
      {activeChallenge ? (
        <div className={styles.notificationContainer}>
          <p>Hora do desafio 🎉!</p>
          <p>
            Valendo {activeChallenge ? `${activeChallenge.amount} xp` : "nada"}
          </p>
        </div>
      ) : null}
    </div>
  );
}
