import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.map}>Map </div>
      <div className={styles.start}>Start section</div>
      <h1 className="text-sky-400 text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}
