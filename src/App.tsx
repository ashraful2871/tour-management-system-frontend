import { Outlet } from "react-router";
import CommonLayout from "./components/ui/layout/CommonLayout";

function App() {
  return (
    <>
      <CommonLayout>
        <Outlet></Outlet>
      </CommonLayout>
    </>
  );
}

export default App;
