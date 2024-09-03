import React from 'react'
import './globals.css'
import Header from './header'

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html className={'max-w-[1280px] mx-auto'}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default Layout
