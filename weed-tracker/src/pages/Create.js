import React, { useState } from 'react'
import '../styles/Generic.css'
import '../styles/Create.css'
import Cultivator from '../components/Cultivator'
import CannabisType from '../components/CannabisType'
import Potency from '../components/Potency'
import Quantity from '../components/Quantity'
import FlowerType from '../components/FlowerType'

const formSubmit = () => {
}

const Create = () => {


    return (
        <div className="container">
            <header className="header">
                <p>Weed Tracking App</p>
            </header>
            <form className="create-form" onSubmit={formSubmit}>
                <Cultivator />
                <div className="text-input">
                    <label htmlFor="strain">Strain</label>
                    <input type="text" autoComplete="off" name="strain"/>
                </div>
                <FlowerType />
                <CannabisType/>
                <Potency/>
                <Quantity />
                <div className="text-input">
                    <label htmlFor="aroma">Aroma</label>
                    <input type="text" autoComplete="off" name="aroma"/>
                </div>
                
                <input type="submit" value="Enter"/>
            </form>
        </div>
    )
}

export default Create