import {Link, useLocation} from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
// import { Link } from 'react-router-dom';

export default function Navbar(){
    const [expandNavBar, setExpandNavBar] = useState(false);
    return(
        <div className='links'>
            <Link to='/home'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='about'>About</Link>
        </div>
    )
}