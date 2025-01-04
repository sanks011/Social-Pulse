import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <main className="flex-grow text-gray-900 dark:text-white dark:bg-gray-900">
                <Outlet />
            </main>
    <Footer />
    </>
  )
}

export default Layout