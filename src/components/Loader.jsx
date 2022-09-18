import { useContext } from "react";
import styles from "../assets/css/Loader.module.css";
import themeContext from "../utils/themeContext";

export default function Loader() {
  const theme = useContext(themeContext);
  const { themeColor } = theme.theme;
  return (
    <div className={styles.loader}>
      <svg
        className={styles.svg_loader}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <path
          fill="none"
          stroke={`${themeColor}`}
          stroke-width="8"
          stroke-dasharray="42.76482137044271 42.76482137044271"
          d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z"
          stroke-linecap="round"
          style={{ transform: "scale(0.64)", transformOrigin: "50px 50px" }}
        >
          <animate
            attributeName="stroke-dashoffset"
            repeatCount="indefinite"
            dur="2.127659574468085s"
            keyTimes="0;1"
            values="0;256.58892822265625"
          ></animate>
        </path>
      </svg>
      <span> Loading... </span>
    </div>
  );
}
