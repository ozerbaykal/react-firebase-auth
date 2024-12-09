import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Modal from "./components/modal";
import { useSelector } from "react-redux";

const App = () => {
  const { open, data } = useSelector((state) => state.modal);

  return (
    <div>
      <Toaster position="top-right" />
      {open && <Modal name={open} data={data} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
