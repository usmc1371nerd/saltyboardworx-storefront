import React from "react";
import { FaInstagramSquare} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {BsTelephoneFill} from 'react-icons/bs'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import "./footer.css"


function Footer() {
    return(
    <div>

        <div className="footer-content">
        <a href="https://www.instagram.com/salty.board.worx/"><FaInstagramSquare/></a>
        <a href="mailto:saltyboardworx@gmail.com?body=Build me something :)"><MdEmail/></a>
        <a href="tel:850-704-5796"> <BsTelephoneFill/> </a> 
        <h6><AiOutlineCopyrightCircle/> Salty Board Worx 2023</h6>
        </div>


    </div>
    )
}


export default Footer;