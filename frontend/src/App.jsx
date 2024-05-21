import { Outlet, useLocation } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const location = useLocation();

  const isAbleNavbar = location.pathname === "/" || location.pathname === "/shop"

  return (
    <>
      <ToastContainer />
      <Navigation />
      <main className="py-3">
        {isAbleNavbar && <Navbar />}
        <Outlet />
      </main>
    </>
  );
};

export default App;
