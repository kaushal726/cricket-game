import React from 'react'
import logo from '../../assets/Images/logo.png'
import image from '../../assets/Images/2.jpg'


const Header = () => {
    return (
        <div className='h-48 w-full flex justify-between'>
            <div className='flex justify-center items-center h-full m-2 ml-28'>
                <img className='w-32  flex justify-center items-center' src={logo} />
            </div>
            {/* <div className='flex justify-center items-center h-full m-2 mr-28'>
                <img className='h-44 flex justify-center items-center' src={image} />
            </div> */}
        </div>
    )
}

export default Header