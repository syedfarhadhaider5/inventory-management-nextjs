// pages/dashboard.js (or any other protected page)
import { useSession,signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Dashboard() {
  const { data: session, status } = useSession();
console.log(session)
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  const router = useRouter();

  const handleSignOut = async () => {
    // Call the signOut function to log out the user
    await signOut({callbackUrl: '/'});
  };

  // If the user is authenticated, display the dashboard content
  return (
    <div>
      <h1>Home</h1>
      <h2>{session?.user?.name}</h2>
      <h2 onClick={handleSignOut}>Logout</h2>
    </div>
  );
}

export default Dashboard;
