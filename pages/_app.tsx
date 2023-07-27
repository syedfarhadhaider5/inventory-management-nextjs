import Login from '@/components/client/Login'
import '@/styles/globals.css'
import { SessionProvider, useSession } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "@mui/material/styles";
import theme from "../muiTheme"

export default function App({ Component, pageProps }: AppProps) {
  const token = true
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        {
          token ? (<Login />) : (
            <Component {...pageProps} />
          )
        }
      </ThemeProvider>
    </SessionProvider>
  )
}
