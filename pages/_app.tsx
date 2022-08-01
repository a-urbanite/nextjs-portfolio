import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Pagewrapper from '../components/Pagewrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
