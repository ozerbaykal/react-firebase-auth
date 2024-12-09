import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import modal from "./modal";

const store = configureStore({

    reducer: {
        auth: userSlice,
        modal: modal



    }

})

export default store