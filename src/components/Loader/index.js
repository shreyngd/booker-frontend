import styles from "./index.module.scss";

const Loader = () => {
  return (
    <section className={styles.loaderContainer}>
      <article className={styles.spinner}>
        <article className={styles.cube1} />
        <article className={styles.cube2} />
      </article>
    </section>
  );
};

export default Loader;
