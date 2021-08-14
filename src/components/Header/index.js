import styles from "./index.module.scss";
import { useContext } from "react";
import { UserDetailsContext } from "../../context/userDetailsContext";

const Header = () => {
  const { userDetail } = useContext(UserDetailsContext);
  return (
    <header className={styles.header}>
      <hgroup>
        <h1 className={styles.appName}>Slot Marker</h1>
      </hgroup>
      {userDetail && (
        <figure className={styles.nameContainer}>
          <img src={userDetail.picture} alt="" />
          <figcaption className={styles.name}>{userDetail.name}</figcaption>
        </figure>
      )}
    </header>
  );
};

export default Header;
