import {Menu, MenuItem, MenuButton, SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
// import { Link } from 'react-router-dom';
// import './Navbar.css'
import Link from 'next/link'
import styles from '../styles/components/MainNav.module.css'
import { AiFillSetting } from "react-icons/ai";


const MainNav = ({isAuth, setIsAuth, signUserOut}: any) => {

    return (
      <nav className={styles.mainNav}>
          <ul className={styles.list}>
              <li className={styles.mainNav__link}>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Menu menuButton={<MenuButton className={styles.mainNav__link} > Coding </MenuButton>} transition>
                  <MenuItem><Link className='mainNav__subLink' href="/coding/pet-me-up"> [TS] Pet me Up! </Link></MenuItem>
                  <MenuItem><Link className='mainNav__subLink' href="/coding/moviefinder"> [TS] Moviefinder </Link></MenuItem>
                  <MenuItem><Link className='mainNav__subLink' href="/coding/akzisemauer"> [webdev/geodata] Akzisemauer </Link></MenuItem>
                  <MenuItem><Link className='mainNav__subLink' href="/coding/dai-wordpress-plugin"> [PHP] Wordpress plugin </Link></MenuItem>
                  <MenuItem><Link className='mainNav__subLink' href="/coding/least-cost-path-analysis"> [R] Least Cost Path analysis </Link></MenuItem>
                  {/* <SubMenu label="Styles">
                      <MenuItem>about.css</MenuItem>
                      <MenuItem>home.css</MenuItem>
                      <MenuItem>index.css</MenuItem>
                  </SubMenu> */}
                </Menu>
              </li>
          </ul>
      </nav>
    );
}

export default MainNav;