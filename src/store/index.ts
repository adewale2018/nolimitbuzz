import { UserSlice, userSlice } from "./userSlice";

import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useStore = create(
  devtools<UserSlice>((...a) => ({
    ...userSlice(...a),
  }))
);
