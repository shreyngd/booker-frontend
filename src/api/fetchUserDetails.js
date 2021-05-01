import { userJSON } from "./stubs"

const UserPermissions = new Promise((resolve, reject) => {
    setTimeout(() => resolve(userJSON), 3000);
});