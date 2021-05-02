import { Suspense, lazy } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader";
import UserDetailProvider from "./context/userDetailsContext";

const Login = lazy(() => import("./components/Login"));
const Main = lazy(() => import("./components/Main"));
const RoleSelection = lazy(() => import("./components/RoleSelection"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <UserDetailProvider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />

        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/settings" component={RoleSelection} />
            <Redirect to="/login" />
          </Switch>
        </BrowserRouter>
      </UserDetailProvider>
    </Suspense>
  );
}

export default App;
