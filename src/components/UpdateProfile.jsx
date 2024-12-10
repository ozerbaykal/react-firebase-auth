import { useState } from "react";
import { update, auth, resetPassword } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/userSlice";
import { setUserData } from "../utils";

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.auth);

  const [displayname, setDisplayName] = useState(user.displayname || "");
  const [avatar, setAvatar] = useState(user.photoURL || "");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayname,
      photoURL: avatar,
    });
    setUserData();
  };
  const handleResetSubmit = async (e) => {
    e.preventDefault();
    const result = await resetPassword(password);
    if (result) {
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col ">
      <form
        onSubmit={handleSubmit}
        className="min-w-96 mx-auto grid gap-y-4 py-4 mt-20"
      >
        <h1 className="text-2xl bg-indigo-400 rounded-md text-center py-1 bg-opacity-80">
          Profili Güncelle
        </h1>
        <div>
          <label className="block  font-medium text-gray-800 text-xl">
            Ad Soyad
          </label>
          <div className="my-1">
            <input
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-900 rounded-md "
              placeholder="Davinson Sanches"
              value={displayname}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="block  font-medium text-gray-800 text-xl">
            Fotoğraf
          </label>
          <div className="my-1">
            <input
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-900 rounded-md "
              placeholder="Davinson Sanches"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex disabled:opacity-40 items-center justify-center px-4 py-2 border  border-transparent bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 cursor-pointer focus:ring-offset-2 focus:ring-indigo-500 text-white font-medium "
        >
          Güncelle
        </button>
      </form>
      <form
        onSubmit={handleResetSubmit}
        className="min-w-96 mx-auto grid gap-y-4 py-4 mt-10"
      >
        <h1 className="text-2xl bg-gray-500 text-white rounded-md text-center py-1 bg-opacity-80">
          Parolayı Güncelle
        </h1>
        <div>
          <label className="block  font-medium text-gray-800 text-xl">
            Yeni Parola
          </label>
          <div className="my-1">
            <input
              type="password"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-900 rounded-md "
              placeholder="Yeni parolanızı giriniz.."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={!password}
          className="inline-flex disabled:opacity-40 items-center justify-center px-4 py-2 border  border-transparent bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 cursor-pointer focus:ring-offset-2 focus:ring-indigo-500 text-white font-medium "
        >
          Parolayı Güncelle
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
