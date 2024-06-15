import styles from "./display.module.css";

const Display = ({ CalVal }) => {
  // console.log(styles);
  return <input type="text" className={styles.display} value={CalVal} readOnly/>;
};

export default Display;
