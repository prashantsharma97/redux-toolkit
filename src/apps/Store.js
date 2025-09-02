import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./features/users/userSlice";


export const UserProfile = configureStore({
    reducer: {
        user: UserSlice,
    }
});