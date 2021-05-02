import { useEffect, useState } from "react";
import Loader from "../Loader";
import styles from "./index.module.scss";
import ReactCBGroup from "react-checkbox-group";
import fetchPermissionOfApp from "../../api/fetchPermissionsOfApp";
import { toast } from "react-toastify";
import Button from "../Button";
import { useHistory } from "react-router";
import updateUserPermissions from "../../api/updateUserPermissions";

const RoleSelection = () => {
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState([]);
  const history = useHistory();
  const [selected, setSelected] = useState([]);
  const [select1Err, setSelect1Err] = useState(false);
  const fetchPerms = async () => {
    try {
      const result = await fetchPermissionOfApp();
      setValues(result.data.permissionList);
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const updateUserPerm = async (permissionList) => {
    setLoading(true);
    try {
      const result = await updateUserPermissions(permissionList);
      console.log(result);
      setLoading(false);
      history.push("/main");
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerms();
  }, []);

  const clickBtn = (event) => {
    event.preventDefault();
    if (selected.length === 0) {
      setSelect1Err(true);
      return;
    } else {
      setSelect1Err(false);
      updateUserPerm(selected);
    }
  };

  if (loading) return <Loader />;
  return (
    <form onSubmit={clickBtn} id="perm-form">
      <section className={styles.roleContainer}>
        <article className={styles.box}>
          <header>
            <h3 className={styles.title}>Please select appropriate roles</h3>
            <h5 className={styles.subTitle}>
              These roles can be modified later.
            </h5>
          </header>
          {values.length && (
            <article className={styles.itemContainer}>
              <h3 className={styles.title}>I am a/an:</h3>
              <article className={styles.bottom}>
                <article className={styles.checkBoxContainer}>
                  <ReactCBGroup
                    name="fruits"
                    value={selected}
                    onChange={setSelected}
                  >
                    {(CheckBox) =>
                      values.map((el) => (
                        <label key={el}>
                          <CheckBox value={el} /> {el}
                        </label>
                      ))
                    }
                  </ReactCBGroup>
                </article>
                <article>
                  {select1Err && (
                    <article className={styles.setSelect1Err}>
                      Please select at least one role.
                    </article>
                  )}
                  <Button
                    text="Select Roles"
                    type="submit"
                    form="perm-form"
                    className={styles.submitBtn}
                  />
                </article>
              </article>
            </article>
          )}
        </article>
      </section>
    </form>
  );
};

export default RoleSelection;
