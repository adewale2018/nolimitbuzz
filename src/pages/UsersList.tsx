import Spinner from "../components/Spinner";
import UserData from "../components/UserData";
import { useEffect } from "react";
import { useStore } from "../store";
const UsersList = () => {
  const {
    users,
    loading,
    getUsers,
    currentPage,
    totalUsers,
    setPage,
    pageSize,
  } = useStore();

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {users?.map((user) => (
          <UserData key={user?.id} {...user} />
        ))}
      </div>
      <div className="flex items-center justify-end mt-16">
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-sky-500 text-white px-5 py-2 rounded-md mr-2 disabled:bg-gray-200 disabled:text-gray-500"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(totalUsers / pageSize)}
          className="bg-white text:bg-sky-500 hover:bg-sky-500 border border-sky-500 hover:text-white px-5 py-2 rounded-md mr-2 disabled:bg-gray-200 disabled:text-gray-500 transition-all duration-100"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UsersList;
