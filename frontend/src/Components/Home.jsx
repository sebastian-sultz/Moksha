import FeelGood from "./FeelGood"
import Feeling from "./Feeling"
import FindingHelp from "./FindingHelp"
import Hero from "./Hero"
import Mission from "./Mission"
import { useUser } from "../UserContext"
// sec file
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import Header from "./Header"
// end sec file
const Home = () => {
   


    return (
        <div>
            <div >
                <Hero />
                <Feeling />
                <Mission />
                <FindingHelp />
                <FeelGood />
            </div>
          <ToastContainer />
        </div>
    )
}
export default Home