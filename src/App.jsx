import React from 'react'
import Navbar from './components/Navbar'
import '@fontsource/poppins'; 
import GalaxyCursor from './components/Cursors/GalaxyCursor';
import SwitchButton from './components/Button/SwitchButton';
import Checkbox from './components/CheckBox';
import TeamMemberCard from './components/Card/TeamMemberCard';
const App = () => {
  return (
    <div>
    {/* <SwitchButton /> */}
    {/* <Checkbox /> */}
    <TeamMemberCard />
      {/* <FollowCursor /> */}
      {/* <GalaxyCursor /> */}
      {/* <Navbar /> */}
    </div>
  )
}

export default App