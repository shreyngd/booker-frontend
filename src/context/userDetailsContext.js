import { createContext, useState } from "react";

export const UserDetailsContext = createContext({
  userDetail: null,
});

const UserDetailProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState(null);

  const addUserDetail = (userInfo) => setUserDetail(userInfo);
  const clearUserDetail = () => setUserDetail(null);

  return (
    <UserDetailsContext.Provider
      value={{ userDetail, addUserDetail, clearUserDetail }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailProvider;
