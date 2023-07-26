// pages/login.js
import { useState } from "react";
import { signIn } from "next-auth/react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false, // Redirect manually on success
    });

    if (result?.error) {
      // Handle login error, show error message, etc.
      console.error("Login failed:", result.error);
    } else {
      // If login is successful, redirect to the dashboard
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
