import styles from "./index.module.scss";
import Header from "../Header";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router";
import { useContext, useEffect, useState } from "react";
import UserPermissions from "../../api/fetchUserDetails";
import { toast } from "react-toastify";
import { UserDetailsContext } from "../../context/userDetailsContext";
import WIP from "../WIP";
import Loader from "../Loader";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { userDetail, addUserDetail } = useContext(UserDetailsContext);
  const match = useRouteMatch();
  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    try {
      const result = await UserPermissions();
      addUserDetail(result.data);
      if (result.data.permissions.length === 0) {
        history.push("/settings");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };

  return (
    <section>
      <Header />
      <article className={styles.mainContainer}>
        {loading && <Loader />}
        {userDetail && userDetail.permissions.length ? (
          <Switch>
            {userDetail.permissions.map((el) => (
              <Route
                key={el}
                path={match.path + `/${el.toLowerCase()}`}
                component={WIP}
              />
            ))}
            <Redirect
              to={match.path + `/${userDetail.permissions[0].toLowerCase()}`}
            />
          </Switch>
        ) : null}
      </article>
    </section>
  );
};

export default Main;
