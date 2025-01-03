import { StateCreator } from "zustand";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export interface User {
  id: string | undefined;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface UserSlice {
  loading: boolean;
  error: string | null;
  users: User[];
  fetchedUsers: User[]; 
  userDetails: User | null;
  currentPage: number; 
  pageSize: number; 
  totalUsers: number; 
  getUsers: () => void;
  getDetails: (userId: string) => void;
  searchUsers: (searchTerm: string) => void;
  setPage: (page: number) => void;
}

export const userSlice: StateCreator<UserSlice> = (set, get) => ({
  loading: false,
  error: null,
  users: [],
  fetchedUsers: [],
  userDetails: null,
  currentPage: 1,
  pageSize: 3,
  totalUsers: 0,
  getUsers: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(BASE_URL);
      if (response && response.status === 200) {
        const data = response?.data;
        set({
          fetchedUsers: data,
          totalUsers: data?.length,
        });
        // Set paginated users
        const { currentPage, pageSize } = get();
        const paginatedUsers = data.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        );
        set({ users: paginatedUsers });
      }
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  getDetails: async (userId) => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/${userId}`);
      if (response && response.status === 200) {
        set({ userDetails: response.data });
      }
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  searchUsers: (searchTerm) => {
    set((state) => {
      const { fetchedUsers, currentPage, pageSize } = state;
      if (!searchTerm || searchTerm.trim().length === 0) {
        const paginatedUsers = fetchedUsers.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        );
        return { users: paginatedUsers };
      }
      const filteredUsers = fetchedUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
      const paginatedFilteredUsers = filteredUsers.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      );
      return {
        users: paginatedFilteredUsers,
        totalUsers: filteredUsers.length,
      };
    });
  },
  setPage: (page) => {
    set((state) => {
      const { fetchedUsers, pageSize } = state;
      const paginatedUsers = fetchedUsers.slice(
        (page - 1) * pageSize,
        page * pageSize
      );
      return { users: paginatedUsers, currentPage: page };
    });
  },
});
