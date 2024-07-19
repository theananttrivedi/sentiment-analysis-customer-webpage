import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-Inter min-h-screen flex flex-col items-center m-0 overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default Layout;
