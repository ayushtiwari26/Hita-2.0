import React,{useState, useEffect} from 'react'
import Link from 'next/link'
import {HiOutlineEmojiSad} from 'react-icons/hi'
import { useStateContext } from '../context/StateContext'
import { runFireworks } from '../lib/utils'
const cancel = () => {
    const {setCartItems, setTotalPrice, setTotalQuantities} = useStateContext()
    // useEffect(()=>{
    //     localStorage.clear();
    //     setCartItems([]);
    //     setTotalPrice(0);
    //     setTotalQuantities(0);
    //     runFireworks()
    // }, [])
  return (
    <div className='cancel-wrapper'>
      <div className='cancel'>
        <p className='icon'>
            <HiOutlineEmojiSad size = "100" />
        </p>
        <h2>Sorry to see you here!</h2>
        <p className='email-msg'>Send us your feedback</p>
        <p className='description'>
            If you have any questions, please email
            <a className='email' href='mailto:harshittiwarirt@gmail.com'>harshittiwarirt@gmail.com</a>
        </p>
        <Link href="/">
            <button type='button' width='300px' className='btn'>Continue shopping</button>
        </Link>
      </div>
    </div>
  )
}

export default cancel