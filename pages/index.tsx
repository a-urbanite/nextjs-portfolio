import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import CV from '../components/CV'
import Collapsable from '../components/Collapsable'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <>
      <h1 className='title'>Alexander Städtler</h1>
      <div className='profileBox'>
        <img className='profilePic' src='/images/profile_pic_light.png' alt='profile pic'></img>
        <div className='profileBlock'>
          <p className='profileText'>
            Enthusiastic Fullstack Dev from Germany 
            with a pivot towards backend. My background in 
            archaeology has taught me a great deal about managing 
            projects and quality standards. As a process-oriented 
            professional, I care deeply about well-functioning 
            teams, clearly formulated goals and priorities, 
            as well as agile structures and strategies.
          </p>
          <div className="icon__wrapper">
            <a className='icon' href='https://github.com/a-urbanite' target='blank'><FaGithubSquare /></a>
            <a className='icon' href='https://www.linkedin.com/in/alexander-staedtler/' target='blank'><FaLinkedin/></a>
          </div>
        </div>
      </div>
      <div className='CV_wrapper'>
        <Collapsable collapsed={true} titleOpen="collapse content" titleClosed="Show whole CV" classname="collapse-button">
          <CV/>
        </Collapsable>
      </div>
    </>
  )
}

export default Home
