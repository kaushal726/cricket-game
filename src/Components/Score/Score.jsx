import React, { useContext } from 'react';
import MyContext from '../../Context/ScoreContext'
const Score = () => {
    const { scorePlayer1, scorePlayer2, totalScorePlayer1,
        totalScorePlayer2, playerBatting } = useContext(MyContext);
    // console.log(playerBatting);
    let batting = 'w-14 h-14 flex items-center justify-center text-lg font-extrabold font-sans text-black bg-white border-4 border-black rounded-full m-2';
    let bowling = 'w-14 h-14 flex items-center justify-center text-lg font-extrabold font-sans text-black bg-red-600 border-4 border-black rounded-full m-2';

    return (
        <section className='flex w-full h-38 flex-col  justify-center items-start'>
            <section className='flex items-center justify-center w-full mb-12'>
                <div className=' flex items-center justify-center rounded-md  w-72 h-28 bg-black'>
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
                    <p className={playerBatting ? batting : bowling}>{scorePlayer1[0]}</p>
                    <p className={playerBatting ? batting : bowling}>{scorePlayer1[1]}</p>
                    <p className={playerBatting ? batting : bowling}>{scorePlayer1[2]}</p>
                    <p className={playerBatting ? batting : bowling}>{scorePlayer1[3]}</p>
                    <p className={playerBatting ? batting : bowling}>{scorePlayer1[4]}</p>
                    <p className={playerBatting ? batting : bowling}>{scorePlayer1[5]}</p>
                </section>
                <section className='flex w-full justify-center items-center '>
                    <p className={playerBatting ? bowling : batting}>{scorePlayer2[0]}</p>
                    <p className={playerBatting ? bowling : batting}>{scorePlayer2[1]}</p>
                    <p className={playerBatting ? bowling : batting}>{scorePlayer2[2]}</p>
                    <p className={playerBatting ? bowling : batting}>{scorePlayer2[3]}</p>
                    <p className={playerBatting ? bowling : batting}>{scorePlayer2[4]}</p>
                    <p className={playerBatting ? bowling : batting}>{scorePlayer2[5]}</p>
                </section>
            </section>
        </section>
    )
}

export default Score