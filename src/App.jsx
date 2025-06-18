import React from 'react'
import Navbar from './components/Navbar'
import '@fontsource/poppins'; 
import RotationCard from './components/Card/RotationCard';
import ButtonColorChange from './components/Buttons/ButtonColorChange';
import FollowCursor from './components/Cursors/FollowCursor';
import GalaxyCursor from './components/Cursors/GalaxyCursor';
const App = () => {
  return (
    <div>
      {/* <FollowCursor /> */}
      <GalaxyCursor />
      {/* <Navbar /> */}
      <ButtonColorChange />
      {/* <RotationCard /> */}
    </div>
  )
}

export default App