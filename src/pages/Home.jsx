import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, emailVerification, addTodo, deleteTodo } from "../firebase";
import { logout as logoutHandle } from "../redux/userSlice";
import { useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { todos } = useSelector((state) => state.todos);

  const [todo, setTodo] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    await addTodo({
      todo,
      uid: user.uid,
    });
    setTodo("");
  };

  const handleLogOut = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  const handleVerification = async () => {
    await emailVerification();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  if (user) {
    return (
      <div className="flex  flex-col items-center gap-5 mt-5 ">
        <div className="flex items-center gap-3 ">
          {user.photoURL && (
            <img src={user.photoURL} className="w-16 h-16 rounded-full" />
          )}
          <h1 className="text-3xl ">Hoşgeldin,{user.displayName}</h1>
          <span className="text-2xl font-semibold text-indigo-700">
            {user.email}
          </span>
        </div>
        <div className="flex gap-10">
          <Link
            to="/settings"
            className="bg-indigo-500 px-3 py-2 font-semibold text-white rounded-md text-xl hover:bg-indigo-600 cursor-pointer transition hover:scale-95"
          >
            Ayarlar
          </Link>

          <button
            onClick={handleLogOut}
            className="bg-indigo-500 px-3 py-2 font-semibold text-white rounded-md text-xl hover:bg-indigo-600 cursor-pointer transition hover:scale-95"
          >
            Çıkış Yap
          </button>
          {!user.emailVerified && (
            <button
              onClick={handleVerification}
              className="bg-indigo-500 px-3 py-2 font-semibold text-white rounded-md text-xl hover:bg-indigo-600 cursor-pointer transition hover:scale-95"
            >
              E-Posta Onayla
            </button>
          )}
        </div>
        <form onSubmit={submitHandle} className="flex gap-x-4 w-6/12 mt-10">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Todo"
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-900 rounded-md "
          />
          <button className="bg-indigo-500 px-3 py-2 font-semibold text-white rounded-md text-xl hover:bg-indigo-600 cursor-pointer transition hover:scale-95">
            Ekle
          </button>
        </form>
        {todos.length > 0 && (
          <ul className="mt-4 flex flex-col gap-y-4 w-6/12">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="p-4 rounded bg-indigo-50 text-sm text-indigo-700 flex justify-between items-center "
              >
                {todo.todo}
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="h-7 rounded px-3 bg-indigo-700 text-white"
                >
                  Sil
                </button>
              </li>
            ))}
          </ul>
        )}
        {todos.length == 0 && (
          <li className="p-4 rounded bg-emerald-100 text-sm text-emerald-800  flex justify-between items-center  w-6/12">
            Hiç Todo eklemedin !!
          </li>
        )}
      </div>
    );
  }

  return (
    <div>
      <Link to="/register">Kayıt ol</Link>
      <Link to="/login">Giriş yap</Link>
    </div>
  );
};

export default Home;
