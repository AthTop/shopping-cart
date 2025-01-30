import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function Root() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  // TODO: Add styling for loading state later
  return (
    <>
      <Navbar />
      <div className={`loading ${isLoading ? 'active' : ''}`}></div>
      <Outlet />
    </>
  );
}
