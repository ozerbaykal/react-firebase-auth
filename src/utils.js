import store from "./redux/store";
import { closeModal } from "./redux/modal";

export const modalClose = () => {
    store.dispatch(closeModal())
}