import { BrowserRouter } from "react-router";
import { UnAuthedRoutes } from "../src/routes/UnAuthedRoutes";
import { AuthedRoutes } from "../src/routes/AuthedRoutes";

import "./App.css";

function App() {
  const userLoggedIn = localStorage.getItem("accessToken")

  return (
    <BrowserRouter>
      {userLoggedIn ? <AuthedRoutes /> : <UnAuthedRoutes />}
    </BrowserRouter>
  );
}


export default App;
