// pages/login.js
import { useState } from "react";
import { signIn } from "next-auth/react";
import LoginIcon from '@mui/icons-material/Login';
import { Button, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

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
        <>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <div className="flex items-center justify-center h-screen">
                        <form onSubmit={handleLogin} className="w-full">
                            <h1 className="text-center font-bold text-xl"> <LoginIcon className="inline-block w-8 h-8 mr-2" /> Login</h1>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Username
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>
                            <button type="submit" className="w-full bg-[#000000] text-white p-2 rounded-lg mt-4">Login</button>
                            <Button color="primary">Primary Button</Button>

                        </form>
                    </div>
                </Grid>
                <Grid item xs={4}>
                </Grid>
            </Grid>
        </>
    );
}

export default Login;
