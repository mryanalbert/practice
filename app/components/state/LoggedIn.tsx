import { useState } from "react";

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <button
        className="px-4 py-2 bg-slate-300 rounded-md mx-1"
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className="px-4 py-2 bg-slate-200 rounded-md mx-1"
        onClick={handleLogout}
      >
        Logout
      </button>
      <div>User is {isLoggedIn ? `logged in` : `logged out`}</div>
    </div>
  );
}
