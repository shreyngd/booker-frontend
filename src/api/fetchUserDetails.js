import { userJSON } from "./stubs";

const UserPermissions = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(userJSON), 0);
  }).then((res) => res);

export default UserPermissions;
