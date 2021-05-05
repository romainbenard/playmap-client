import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Itinerary.css'

import Logo from '../components/Logo'

const Home = () => {
    return (
        <div className="flex Itinerary">
            <section className="white">
                <Logo />

                <form action="POST" id="form-itinerary"className="flex">
                    <label htmlFor="origin">Departure</label>
                    <input type="text" name="origin" id="origin" placeholder="|"/>

                    <label htmlFor="destination">Arrival</label>
                    <input type="text" name="destination" id="destination" placeholder="|"/>

                    <div id="travel-mode">
                        <label htmlFor="mode">Travel Mode</label>
                        <span>
                            <input type="radio" name="mode" id="car"  value="DRIVING"/>
                            <label htmlFor="car">Car</label>
                        </span>
                        <span>
                            <input type="radio" name="mode" id="walk" value="WALKING"/>
                            <label htmlFor="walk">Walk</label>
                        </span>
                        <span>
                            <input type="radio" name="mode" id="bus" value="BUS"/>
                            <label htmlFor="bus">Bus</label>
                        </span>
                        <span>
                            <input type="radio" name="mode" id="subway" value="SUBWAY"/>
                            <label htmlFor="subway">Subway</label>
                        </span>
                    </div>
                </form>

            </section>
        </div>
    )
}

export default Home