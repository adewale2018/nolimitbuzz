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
  getUsers: () => void;
  getDetails: (userId: string) => void;
  searchUsers: (searchTerm: string) => void;
}

export const userSlice: StateCreator<UserSlice> = (set) => ({
  loading: false,
  error: null,
  users: [],
  fetchedUsers: [],
  userDetails: null,
  getUsers: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(BASE_URL);
      if (response && response.status === 200) {
        set({ users: response.data, fetchedUsers: response.data });
        set({ loading: false });
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
        set({ loading: false });
      }
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },
  searchUsers: (searchTerm) => {
    set((state) => {
      if (!searchTerm || searchTerm.trim().length === 0) {
        return { users: state.fetchedUsers };
      }
      const filteredUsers = state.fetchedUsers.filter(
        (user) =>
          user.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
      return { users: filteredUsers };
    });
  },
});
