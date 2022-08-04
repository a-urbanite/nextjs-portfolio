import {Menu, MenuItem, MenuButton, SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
// import { Link } from 'react-router-dom';
// import './Navbar.css'
import Link from 'next/link'
import styles from '../styles/components/MainNav.module.css'
import { AiFillSetting } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {signOut} from 'firebase/auth'
import { auth } from '../firebase-config';


const MainNav = () => {

  const router = useRouter()
  const isAuth = useSelector( (state: any) => state.authState.isauth)
  // console.log("authstate from withing mainnav", isAuth)

  const signUserOut = () => {
    signOut(auth).then(() => {
        // localStorage.clear()
        // setIsAuth(false)
        // window.location.pathname = "/login"
        router.push("/login")
    })
  }

    return (
      <nav className={styles.mainNav}>
          <ul className={styles.list}>
              <li className={styles.mainNav__link}>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Menu menuButton={<MenuButton className={styles.mainNav__link} > Coding </MenuButton>} transition>
                  <MenuItem><Link className='mainNav__subLink' href="/coding/pet-me-up"> [TS] Pet me Up! </Link></MenuItem>
                  <MenuItem><Link className='mainNav__subLink' href="/coding/movie-finder"> [TS] Moviefinder </Link></MenuItem>
                  <MenuItem><Link className='mainNav__subLink' href="/coding/akzisemauer"> [webdev/geodata] Akzisemauer </Link></MenuItem>
                  <MenuItem><Link className='mainNav__subLink' href="/coding/wordpress-plugin"> [PHP] Wordpress plugin </Link></MenuItem>
                  <MenuItem><Link className='mainNav__subLink' href="/coding/least-cost-path-analysis"> [R] Least Cost Path analysis </Link></MenuItem>
                  {/* <SubMenu label="Styles">
                      <MenuItem>about.css</MenuItem>
                      <MenuItem>home.css</MenuItem>
                      <MenuItem>index.css</MenuItem>
                  </SubMenu> */}
                </Menu>
              </li>
              <li className={styles.mainNav__link}>
                <Link href='/archaeology'>Archaeology</Link>
              </li>
              { !isAuth && <li className={styles.mainNav__link}>
                <Link href='/signin'>{isAuth? "Log out" : "Log in"}</Link>
              </li> }
              { isAuth && <li>INSIDE!</li>}
              <li className={styles.mainNav__link}>
                <Link href='/redux-test'>redux-test</Link>
              </li>
              
              { isAuth && <button className={styles.mainNav__link}onClick={signUserOut}>Log Out</button>}
              
          </ul>
      </nav>
    );
}

export default MainNav;