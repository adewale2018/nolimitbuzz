import { Search } from "lucide-react";
import { useState } from "react";
import { useStore } from "../store";

const SearchBar = () => {
  const { searchUsers } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    searchUsers(e.target.value);
  }
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Search User</h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Search with name or email..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
