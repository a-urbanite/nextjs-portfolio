import React from 'react'
import MainNav from './MainNav'

const Layout = ({children}: any) => {
  return (
    <>
      <MainNav></MainNav>
      <main> {children} </main>
    </>
  )
}

export default Layout