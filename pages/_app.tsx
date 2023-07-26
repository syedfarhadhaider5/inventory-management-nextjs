import Login from '@/components/client/Login'
import '@/styles/globals.css'
import { SessionProvider, useSession } from 'next-auth/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const token = true
  return (
    <SessionProvider session={pageProps.session}>
          {
            token ? (<Login />) : (
              <Component {...pageProps} />
            )
          }
    </SessionProvider>
  )
}
