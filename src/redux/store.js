import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import modal from "./modal";
import todos from "./todos";

const store = configureStore({

    reducer: {
        auth: userSlice,
        modal: modal,
        todos: todos



    }

})

export default store