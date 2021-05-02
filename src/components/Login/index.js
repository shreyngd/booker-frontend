import GoogleLogin from "react-google-button";
import { GOOGLE_AUTH_URL } from "../../CONSTANTS";
import styles from "./index.module.scss";

const Login = () => {
  return (
    <section className={styles.loginContainer}>
      <header>
        <hgroup>
          <h1 className={styles.headerName}>Welcome to Slot Marker</h1>
        </hgroup>
      </header>
      <article>
        <GoogleLogin
          type="light"
          onClick={() => {
            window.open(`${GOOGLE_AUTH_URL}`, "_self");
          }}
        />
      </article>
    </section>
  );
};

export default Login;
