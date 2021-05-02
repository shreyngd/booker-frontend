import { PERMISSIONS_URL } from "../CONSTANTS";
import apiCall from "./apiCall";

export default function fetchPermissionOfApp() {
  return apiCall(PERMISSIONS_URL);
}
