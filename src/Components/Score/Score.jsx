import React, { useContext } from 'react';
import MyContext from '../../Context/ScoreContext'
import toast from 'react-hot-toast';
const Score = () => {
    const { scorePlayer1, scorePlayer2, totalScorePlayer1,
        totalScorePlayer2, } = useContext(MyContext);
    // console.log(scorePlayer1, scorePlayer2);
    return (
        <section className='flex w-full h-44 flex-col  justify-center items-start'>
            <section className='flex items-center justify-center w-full mb-12'>
                <div className=' flex items-center justify-center w-full w-72 h-28 bg-black'>
                    <div className='flex justify-center items-center flex-col p-5'>
                        <p className='text-white text-base'>Your Score</p>
                        <h1 className='text-white text-lg font-bold'>{totalScorePlayer1}</h1>
                    </div>
                    <div className='flex justify-center items-center flex-col p-5'>
                        <p className='text-white text-base'>Robot Score</p>
                        <h1 className='text-white text-lg font-bold'>{totalScorePlayer2}</h1>

                    </div>
                </div>
            </section>
            <section className='flex justify-between items-center w-full'>
                <section className=' flex flex-row w-full justify-center items-center'>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans text-white bg-gray-950 m-2'>{scorePlayer1[0]}</p>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans text-white bg-gray-950 m-2'>{scorePlayer1[1]}</p>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans text-white bg-gray-950 m-2'>{scorePlayer1[2]}</p>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans text-white bg-gray-950 m-2'>{scorePlayer1[3]}</p>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans text-white bg-gray-950 m-2'>{scorePlayer1[4]}</p>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans text-white bg-gray-950 m-2'>{scorePlayer1[5]}</p>
                </section>
                <section className='flex w-full justify-center items-center '>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans bg-gray-950 text-white m-2'>{scorePlayer2[0]}</p>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans bg-gray-950 text-white m-2'>{scorePlayer2[1]}</p>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans bg-gray-950 text-white m-2'>{scorePlayer2[2]}</p>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans bg-gray-950 text-white m-2'>{scorePlayer2[3]}</p>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans bg-gray-950 text-white m-2'>{scorePlayer2[4]}</p>
                    <p className='w-10 h-10 flex items-center justify-center text-lg font-bold font-sans bg-gray-950 text-white m-2'>{scorePlayer2[5]}</p>
                </section>
            </section>
        </section>
    )
}

export default Score