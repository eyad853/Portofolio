import React from 'react'
import Nav from '../../../components/Nav/Nav'
import SocketIoBody from '../../../components/SkillsBodies/socketIo/SocketIoBody'

const SocketIo = () => {
  return (
<div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("_bd71bd68-32fa-438f-a1c1-20e6bfbdfc64.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <SocketIoBody />
    </div>
</div>
  )
}

export default SocketIo