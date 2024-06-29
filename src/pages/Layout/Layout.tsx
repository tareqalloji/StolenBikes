import { Outlet } from "react-router-dom";
import Nav from "./Navbar";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
