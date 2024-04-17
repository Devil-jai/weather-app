import React, { useState } from 'react'
import getWeather from './Api'

import humidity from '../Components/assets/humidity.png'
import wind from '../Components/assets/wind-solid.svg'

function City() {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    // const [sunrise_hours,setsunrise_hour] = useState()
    // const [sunrise_mins,setsunrise_min] = useState()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


    const getWeatherCity = async () => {
        const weatherData = await getWeather(city);
        setWeather(weatherData);
        setCity("");
    }
    // const date = new Date()
    // // console.log(date)
    // const hours = date.getHours()
    // const am = hours >= 12 ? 'PM' : 'AM';

    // if(weather.weather && weather){
    //     const unix = weather.sys.sunrise;
    // let date_sunrise = new Date(unix*1000)
    // console.log(date_sunrise)
    // let sunrise_hour = date_sunrise.getHours();
    // setsunrise_hour(sunrise_hour)
    // let sunrise_min  = date_sunrise.getMinutes();
    // setsunrise_min(sunrise_min)
    // }
    // else{
    //     console.log(" ")
    // }

    return (
        <>

            <div className="">
                <div className="flex flex-col ">
                    <input type="text" className= ' mx-auto mt-28 w-72 rounded-md placeholder:text-slate-400 py-1 pl-3 focus:outline-none ' placeholder='Search city' value={city} onChange={(e) => setCity(e.target.value)} />
                    <button className='bg-red-400 w-44 py-1 rounded-2xl text-white mx-auto mt-3 hover:bg-red-300 ' onClick={() => getWeatherCity()}> Search</button>
                </div>

                {weather && weather.weather &&
                    <div className='grid md:grid-cols-2'>
                        <div className=' md:justify-items-end justify-items-center grid md:mt-0 mt-3'>
                            <img className='md:w-96  w-64 ' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
                        </div>
                        <div className='mt-2xl-36 md:mt-20  w-2xl-1/2 '>
                            <div className='text-center '>
                                <span className='md:text-9xl text-7xl text-white'>{Math.floor(weather.main.temp)}&deg;C</span>
                            </div>
                            <div className='text-center md:mt-5 mt-3'>
                                <h6 className='text-slate-300 md:text-2xl text-lg'>{weather.weather[0].main}</h6>
                            </div>
                            <div  className='text-center md:mt-5 mt-3 '>
                                <h6 className='text-slate-300 md:text-2xl text-lg'>{weather.name}, <span className='text-white'>{weather.sys.country}</span></h6>
                            </div>
                            <div className='flex justify-center mt-10 '> 
                                <div className='flex '>
                                    <img className='md:w-14  w-10 md:h-16 h-12' src={humidity} alt="" />
                                    <div className=' ms-1'>
                                        <div className='text-white md:text-3xl text-xl'> {weather.main.humidity}%</div>
                                        <h6 className='text-slate-300 text-xs md:text-sm'>Humidity</h6>
                                    </div>
                                </div>
                                <div className='flex ms-7   '>
                                    <img className='md:w-14  w-10 md:h-16 h-12 ' src={wind} alt="" />
                                    <div className='ms-2'>
                                        <div className='text-white md:text-3xl text-xl'>{weather.wind.speed} Km/h</div>
                                        <h6 className='text-slate-300 text-xs md:text-sm'>wind Speed</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                }
                {!weather.weather && <h3> </h3>}


            </div>


        </>
    )
}

export default City