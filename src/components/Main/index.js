import styles from "./index.module.scss";
import Header from "../Header";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import { useContext, useEffect, useState } from "react";
import UserPermissions from "../../api/fetchUserDetails";
import { toast } from "react-toastify";
import { UserDetailsContext } from "../../context/userDetailsContext";
import WIP from "../WIP";
import Loader from "../Loader";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const { userDetail, addUserDetail } = useContext(UserDetailsContext);
  const match = useRouteMatch();
  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    try {
      const result = await UserPermissions();
      addUserDetail(result.data);
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
        {userDetail && (
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
        )}
      </article>
    </section>
  );
};

export default Main;
