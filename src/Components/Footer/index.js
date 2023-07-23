import React from 'react';
import Logo from '../../assets/images/Logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './index.scss'

const Footer = () =>{
    return(
        
    <div className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 footer-logo">
                    <div className='footer_image'>
                        <img src={Logo}></img>
                    </div>
                </div>
                <div className="col-lg-2 footer-elements">
                    <h6 className='sitemap'>SITEMAP</h6>
                    <p>
                        <Link>Admissions</Link>
                    </p>
                    <p>
                        <Link>Gallerie</Link>
                    </p>
                    <p>
                        <Link>Recrutement</Link>
                    </p>
                    <p>
                        <Link>Inscriptions</Link>
                    </p>
                    <p>
                        <Link>school policies</Link>
                    </p>
                </div>
                <div className='col-lg-3 footer-elements'> 
                    <h6 className='contact-datails'>Contact</h6>
                    <p>Jeanne D’Arc International School N°57 Boulevard Moulay Youssef, Anfa - Casablanca</p>
                    <p>+212 522 22 01 70   -   +212 642 56 23 28</p>
                    <p>contact@jeanned’arcinternational.ma</p>
                </div>
                <div className="col-lg-3 footer-elements">
                    <h6 className='contact-us'>Suivez nous</h6>
                </div>
            </div>
        </div>
        {/* Copyright */}

        <div className='copy-right'>
            <p>ALL RIGHTS RESERVED  © 2023  - JEANNE D’ARC INTERNATIONAL SCHOOL</p>
        </div>
    </div>

    
    )
}
export default Footer


