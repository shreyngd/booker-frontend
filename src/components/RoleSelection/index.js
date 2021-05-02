import styles from "./index.module.scss";

const RoleSelection = () => {
  return (
    <section className={styles.roleContainer}>
      <article className={styles.box}>
        <header>
          <h3 className={styles.title}>Please select appropriate roles</h3>
          <h5 className={styles.subTitle}>
            These roles can be modified later.
          </h5>
        </header>
        <article className={styles.itemContainer}>
          <h3 className={styles.title}>I am a/an:</h3>
        </article>
      </article>
    </section>
  );
};

export default RoleSelection;
