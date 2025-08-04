import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      <h1>this is AdminLayout</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;
