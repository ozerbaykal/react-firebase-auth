import { createSlice } from "@reduxjs/toolkit";
import { activate } from "firebase/remote-config";

const initialState = {
    todos: [false],

}

const todos = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload
        },
        appendTodo: (state, action) => {
            state.todos = [...state.todos, action.payload]
        },

    },

})

export const { setTodos, appendTodo } = todos.actions

export default todos.reducer