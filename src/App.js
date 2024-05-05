import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/authentications/loginPage";

import RegisterPage from "./components/authentications/register";
import LandingPage from "./components/dashboard/landingPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={<LandingPage />} />
        <Route path="/login" Component={<LoginPage />} />
        <Route path="/register" Component={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
