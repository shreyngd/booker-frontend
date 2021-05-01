import GoogleLogin from "react-google-button";
import { useHistory } from "react-router";
import styles from "./index.module.scss";

const Login = () => {
  const history = useHistory();
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
            history.replace("/main");
          }}
        />
      </article>
    </section>
  );
};

export default Login;
