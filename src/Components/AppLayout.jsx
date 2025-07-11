import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <main className="w-screen overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
