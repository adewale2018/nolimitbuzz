import Spinner from "../components/Spinner";
import UserData from "../components/UserData";
import { useEffect } from "react";
import { useStore } from "../store";
const Homepage = () => {
  const { loading, users, getUsers } = useStore();

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {users?.map((user) => (
        <UserData key={user?.id} {...user} />
      ))}
    </div>
  );
};

export default Homepage;
