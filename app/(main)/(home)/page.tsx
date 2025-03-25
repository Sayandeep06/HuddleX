import React from 'react'
import StatusBar from '@/components/StatusBar';
import MainMenu from '@/components/MainMenu';
const HomePage = () => {
  return (
    <div className='flex flex-col md:gap-32 pt-5 items-center gap-10 md:flex-row'>
      <StatusBar/>
      <MainMenu/>
    </div>
  )
}

export default HomePage;
