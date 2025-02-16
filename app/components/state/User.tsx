import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function User() {
  const [user, setUser] = useState({} as AuthUser);

  const handleLogin = () =>
    setUser({
      name: "Ryan",
      email: "ryan@gmail.com",
    });

  // const handleLogout = () => setUser({});

  return (
    <div>
      <button
        className="px-4 py-2 bg-slate-300 rounded-md mx-1"
        onClick={handleLogin}
      >
        Login
      </button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
}
