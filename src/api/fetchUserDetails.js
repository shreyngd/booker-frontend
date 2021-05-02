import { PROFILE_URL } from "../CONSTANTS";
import apiCall from "./apiCall";
import { userJSON } from "./stubs";

const UserPermissions = () => apiCall(PROFILE_URL);

export default UserPermissions;
