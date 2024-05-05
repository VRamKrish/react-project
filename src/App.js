import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/authentications/loginPage";
import RegisterPage from "./components/authentications/register";
import LandingPage from "./components/dashboard/landingPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
