import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login";
import Main from "./components/Main";
import UserDetailProvider from "./context/userDetailsContext";

function App() {
  return (
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
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </UserDetailProvider>
  );
}

export default App;
