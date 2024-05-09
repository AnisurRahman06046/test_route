import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <h1>This is home page landing page</h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
