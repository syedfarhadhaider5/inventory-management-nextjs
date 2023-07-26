// pages/dashboard.js (or any other protected page)
import { useSession } from "next-auth/react";

function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    // If the user is not authenticated, redirect them to the login page
    return <div>Please login to access the dashboard.</div>;
  }

  // If the user is authenticated, display the dashboard content
  return (
    <div>
      <h1>Welcome, {session.user.name}!</h1>
      <p>Email: {session.user.email}</p>
    </div>
  );
}

export default Dashboard;
