import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhyMiniBank from "./pages/WhyMiniBank";
import Account from "./pages/Account";
import NavBar from "./components/NavBar";
import Copyright from "./components/Copyright";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/whyminibank" element={<WhyMiniBank />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      <Copyright />
    </BrowserRouter>
  );
}

export default App;
