import { PROFILE_URL } from "../CONSTANTS";
import apiCall from "./apiCall";

const UserPermissions = () => apiCall(PROFILE_URL);

export default UserPermissions;
