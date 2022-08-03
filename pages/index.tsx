import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.css'
// import pagestyles from '../styles/components/Pagewrapper.module.css'

import CV from '../components/CV'
import Collapsable from '../components/Collapsable'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <article className='page'>
      <h1>Alexander Städtler</h1>
      <div className={styles.profileBox}>
        <img className={styles.profilePic} src='https://firebasestorage.googleapis.com/v0/b/react-blog-30aa0.appspot.com/o/profile_pic_light.png?alt=media&token=95d6db8e-64b7-4a93-90cd-2bb5322dadf4' alt='profile pic'></img>
        <div className={styles.profileBlock}>
          <p className={styles.profileText}>
            Enthusiastic Fullstack Dev from Germany 
            with a pivot towards backend. My background in 
            archaeology has taught me a great deal about managing 
            projects and quality standards. As a process-oriented 
            professional, I care deeply about well-functioning 
            teams, clearly formulated goals and priorities, 
            as well as agile structures and strategies.
          </p>
          <div className={styles.icon__wrapper}>
            <a className={styles.icon} href='https://github.com/a-urbanite' target='blank'><FaGithubSquare /></a>
            <a className={styles.icon} href='https://www.linkedin.com/in/alexander-staedtler/' target='blank'><FaLinkedin/></a>
          </div>
        </div>
      </div>
      <Collapsable collapsed={true} titleOpen="collapse content" titleClosed="Show whole CV" btnclassname={styles.CVButton}>
        <CV/>
      </Collapsable>
    </article>
  )
}

export default Home
