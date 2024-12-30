
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { FaUserAstronaut } from "react-icons/fa";
import { useUser } from '../UserContext';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/Logo2.png'
import { IoMdCall } from "react-icons/io";
const HeaderTop = () => {

 // sec file
 const { loggedInUser, setLoggedInUser } = useUser();

 // const [loggedInUser, setLoggedInUser] = useState('');
 const navigate = useNavigate();
 // useEffect(() => {
 //     setLoggedInUser(localStorage.getItem('loggedInUser'))
 // }, [])


 //end sec file
 const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess('User Loggedout');
    setLoggedInUser(''); 
    setTimeout(() => {
      navigate('/login');
    }, 1000)
  }

 

    return (
        <div className='flex justify-between bg-prim h-16'>
            <div>
              <Link to={"/home"}>  <div className='flex'> 
                   <img className="h-14 p-1 my-auto mx-6" src={Logo}></img>
                   <p className='font-libre text-xl my-auto pt-2'>Moksha</p>
                </div></Link>
            </div>
            <div className='mx-10 my-auto '>
                <div className='flex'>
                   <Link to={"/help"}> <button className='flex mx-2 items-center bg-bgcolor rounded-3xl py-1 px-4 text-prim md:py-2'>
                    <div className='pr-2'>
                        <IoMdCall className='h-7 w-7' />
                    </div>
                    <div className='pl-1 text-sm md:text-base '>
                    Need Help
                    </div>
                  </button>
                  </Link>


                  <button className='flex items-center bg-bgcolor rounded-3xl py-1 px-4 text-prim md:py-2'>
                    <div className='pr-2'>
                    <FaUser className='h-6 w-auto' />
                       
                    </div>
                    <div className='pl-1 text-sm md:text-base '>
                    {loggedInUser ? (
                  <button onClick={handleLogout}>Logout</button> // If logged in, show Logout
                ) : (
                  <button onClick={() => navigate('/login')}>Login</button> // If not logged in, show Login
                )}
                    </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default HeaderTop