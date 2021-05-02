import apiCall from "./apiCall";
import { UPDATE_PERMISSIONS_URL } from "../CONSTANTS";

export default function updateUserPermissions(permissionList) {
  return apiCall(UPDATE_PERMISSIONS_URL, "PUT", { permissionList });
}
