import React from 'react'
import logo from '../../assets/Images/logo.png'
import image from '../../assets/Images/1.jpg'


const Header = () => {
    return (
        <div className='h-48 w-full flex justify-between'>
            <div className='flex w-full justify-start items-center h-full '>
                <img className='w-36  flex justify-start items-center' src={image} />
            </div>
            {/* <div className='flex justify-center items-center h-full m-2 mr-28'>
                <img className='h-44 flex justify-center items-center' src={image} />
            </div> */}
        </div>
    )
}

export default Header