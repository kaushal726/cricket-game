import React, { useContext } from 'react';
import MyContext from '../../Context/ScoreContext'
import toast from 'react-hot-toast';
const Score = () => {
    const { scorePlayer1, scorePlayer2, totalScorePlayer1,
        totalScorePlayer2, } = useContext(MyContext);
    // console.log(scorePlayer1, scorePlayer2);
    return (
        <section className='flex w-full h-10  justify-between items-start'>
            <h1>{totalScorePlayer1}</h1> |
            <h1>{totalScorePlayer2}</h1>

            <section className=' flex w-full justify-center items-center'>
                <p className='w-10 h-10 text-white bg-gray-950 m-2'>{scorePlayer1[0]}</p>
                <p className='w-10 h-10 text-white bg-gray-950 m-2'>{scorePlayer1[1]}</p>
                <p className='w-10 h-10 text-white bg-gray-950 m-2'>{scorePlayer1[2]}</p>
                <p className='w-10 h-10 text-white bg-gray-950 m-2'>{scorePlayer1[3]}</p>
                <p className='w-10 h-10 text-white bg-gray-950 m-2'>{scorePlayer1[4]}</p>
                <p className='w-10 h-10 text-white bg-gray-950 m-2'>{scorePlayer1[5]}</p>
            </section>
            <section className='flex w-full justify-center items-center '>

                <p className='w-10 h-10 bg-gray-950 text-white m-2'>{scorePlayer2[0]}</p>
                <p className='w-10 h-10 bg-gray-950 text-white m-2'>{scorePlayer2[1]}</p>
                <p className='w-10 h-10 bg-gray-950 text-white m-2'>{scorePlayer2[2]}</p>
                <p className='w-10 h-10 bg-gray-950 text-white m-2'>{scorePlayer2[3]}</p>
                <p className='w-10 h-10 bg-gray-950 text-white m-2'>{scorePlayer2[4]}</p>
                <p className='w-10 h-10 bg-gray-950 text-white m-2'>{scorePlayer2[5]}</p>
            </section>
        </section>
    )
}

export default Score