import React, { useState } from 'react'

const ChangeCar = () => {
    const [carColor, setCarColor] = useState('/img/black-car.jpg')
    return (
        <div>
            <div className='container'>
                <h3>Bài tập Change color car</h3>
                <div className='row'>
                    <div className='col-4'>
                        <img className='w-100' src={carColor} alt="..." />
                    </div>
                    <div className='col=8 my-2'>
                        <button style={{ background: 'red' }} className='btn mx-2 text-white' onClick={() => {
                            setCarColor('/img/red-car.jpg')
                        }}>Red color</button>
                        <button style={{ background: 'gray' }} className='btn mx-2 text-white' onClick={() => {
                            setCarColor('/img/silver-car.jpg')
                        }} >Gray color</button>
                        <button style={{ background: 'black' }} className='btn mx-2 text-white' onClick={() => {
                            setCarColor('/img/black-car.jpg')
                        }}>Black color</button>

                    </div>


                </div>


            </div>
        </div>
    )
}

export default ChangeCar