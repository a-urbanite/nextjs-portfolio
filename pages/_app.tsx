//styles
import '../styles/globals.css'
import '../styles/utilities.css'
// nextjs utils?
import type { AppProps } from 'next/app'
//hooks
import { useEffect, useState } from 'react';
//firebase stuff
import {signOut} from 'firebase/auth'
import { auth } from '../firebase-config';
//components
import MainNav from '../components/MainNav';
// redux stuff
import { Provider } from 'react-redux';
import { counterstore } from '../redux_state.js'

function MyApp({ Component, pageProps }: AppProps) {
  
  const [isAuth, setIsAuth] = useState<any>(undefined);
  const [postToEdit, setPostToEdit] = useState<any>({});

  const signUserOut = () => {
    signOut(auth).then(() => {
        localStorage.clear()
        setIsAuth(false)
        window.location.pathname = "/login"
    })
  }

  return (
  <>
    <Provider store={counterstore}>
      <MainNav></MainNav>
      <main> 
        <Component {...pageProps}/>
      </main>
    </Provider>
  </>
        
    
  )
}

export default MyApp
