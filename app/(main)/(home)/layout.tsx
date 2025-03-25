import React from 'react'
import NavBar from '@/components/NavBar'
const HomeLayout = async ({children}:{
    children: React.ReactNode
}) => {
  return (
    <main className='relative'>
      <NavBar/> 
      <section className='flex flex-1 flex-col min-h-screen px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
        {children}
      </section>
    </main>
  )
}

export default HomeLayout
