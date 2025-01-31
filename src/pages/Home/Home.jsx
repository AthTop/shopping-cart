import styles from "./Home.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to RandomStore!</h1>
      <p>Have a browse through our shop wares and buy something, maybe(?)!</p>
    </div>
  );
}
