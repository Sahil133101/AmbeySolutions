import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

function Layout({children}) {
  return (
    <div>
        <Navbar></Navbar>
        <div className='Content'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout