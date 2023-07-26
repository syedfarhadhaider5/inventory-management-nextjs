// [...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

const options = {
  providers: [
    // Add your custom authentication provider here
    // Example: Email and Password authentication
    CredentialsProvider({
      // The name to display on the sign-in form (e.g., "Sign in with...")
      name: "Credentials",
      credentials: {
        // The fields to validate on the sign-in form
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Add your custom authentication logic here
        // Example: Check the credentials against your database
        const user = { id: 1, name: "John Doe", email: "john@example.com" };
        if (
          credentials.username === "john" &&
          credentials.password === "password"
        ) {
          // If authentication is successful, return an object with user information
          return Promise.resolve(user);
        } else {
          // If authentication fails, return null
          return Promise.resolve(null);
        }
      },
      pages: {
        signIn: '/auth/index',
    },
    }),
  ],
};

export default NextAuth(options);
