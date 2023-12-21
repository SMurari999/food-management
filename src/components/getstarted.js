
import React from 'react';
import PricingCard from './card';
import { useNavigate } from "react-router-dom";
function Getstarted() { 
    const navigation=useNavigate();
    return (
        <>
        <div>
        <div className="container-fluid text-center bg-warning-subtle min-h-screen">
  <div className="row py-5">
    <div className="col py-3">
      <h1>WHAT'S YOUR ROLE?</h1>
    </div>
  </div>
  
    <div
    onClick={() => {

    }}   
    className='flex justify-evenly '>
      <div onClick={()=>{
        navigation('/Signup')
        localStorage.setItem('role','Restaurant');
      }

      }
      className='cursor-pointer  transition duration-300 hover:opacity-70'>
        
      <PricingCard name='Restaruant' text='Solutions for not wasting food' icon={require('../photos/restaurant.jpg')}/>
      </div>
      <div
      onClick={()=>{
        navigation('/Signup')
        localStorage.setItem('role','foodacceptor');
      }

      }
      className='cursor-pointer  transition duration-300 hover:opacity-70'
      >
      <PricingCard name='Food acceptor' text='Taking of food' icon={require('../photos/customer.png')}/>
      </div>
    </div>
</div>

        </div>
        </>
    );
}
export default Getstarted;

