import styles from "./index.module.scss";
import Header from "../Header";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router";
import { useContext, useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import UserPermissions from "../../api/fetchUserDetails";
import { toast } from "react-toastify";
import { UserDetailsContext } from "../../context/userDetailsContext";
import WIP from "../WIP";
import Loader from "../Loader";
import { Link } from "react-router-dom";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();
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
          <>
            <article>
              <ProSidebar>
                <Menu iconShape="square">
                  {userDetail.permissions.map((el) => (
                    <MenuItem
                      key={el}
                      active={
                        location.pathname ===
                        match.path + `/${el.toLowerCase()}`
                      }
                    >
                      {el}
                      <Link to={match.path + `/${el.toLowerCase()}`} />
                    </MenuItem>
                  ))}
                  <MenuItem>
                    Settings
                    <Link to="/settings" />
                  </MenuItem>
                </Menu>
              </ProSidebar>
            </article>
            <article>
              <Switch>
                {userDetail.permissions.map((el) => (
                  <Route
                    key={el}
                    path={match.path + `/${el.toLowerCase()}`}
                    component={WIP}
                  />
                ))}
                <Redirect
                  to={
                    match.path + `/${userDetail.permissions[0].toLowerCase()}`
                  }
                />
              </Switch>
            </article>
          </>
        ) : null}
      </article>
    </section>
  );
};

export default Main;
