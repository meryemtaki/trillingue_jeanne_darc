import React, { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headmaster from '../../assets/images/headmaster.jfif'
import Early from '../../assets/images/early.png'
import Primary from '../../assets/images/primary.png'
import LowerSecondary from '../../assets/images/lower-secondary.png'
import UpperSecondary from '../../assets/images/upper-secondary.png'
import Play from '../../assets/images/Circled Play.png'
import HomeVideo from '../../assets/images/Jeanne_dArc_International_School.mp4'
import ImageChorte from '../../assets/images/image_notre_charte.png'

import ImageEnseignement from '../../assets/images/BAC2023.png'

import Raison1 from '../../assets/images/raison1.png'
import Raison2 from '../../assets/images/raison2.png'
import Raison4 from '../../assets/images/raison4.png'
import Raison5 from '../../assets/images/raison5.png'
import Raison6 from '../../assets/images/raison6.png'
import ImageRaison from '../../assets/images/image_raison.png'


import SportSlider from '../../assets/images/sport_slider.png'
import CuculturellesSlider from '../../assets/images/culturelles_slider.png'
import ExtraSlider from '../../assets/images/extra_slider.png'
import SocailesSlider from '../../assets/images/scolaire_slider.png'

import ScolairesSlider from '../../assets/images/scolaire_slider.png'
import VoyageSlider from '../../assets/images/voyage_slider.png'
import SummerSlider from '../../assets/images/summer_slider.png'
import RobotiqueSlider from '../../assets/images/robotique_slider.png'



import './index.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Accueil = () => {
    const animateOnScroll = () => {
        const elementsToAnimate = document.querySelectorAll('.animate-from-right, .animate-from-left, .animate-from-bottom, .animate-from-top, .animate-from-in, animate-from-right-smoth, animate-from-left-smoth');
      
        elementsToAnimate.forEach(element => {
          const elementOffset = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
      
          if (elementOffset < windowHeight - 100) {
            element.classList.add('animate');
          }
        });
    };
      
    window.addEventListener('scroll', animateOnScroll);


    const responsive = {
          superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4.5
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3.5
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2.5
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.5
          }
    };

        
    return (
        <div className='Home'>

            <div className='Video_bg_home'>
                <video src={HomeVideo} type="video/mp4" width={'100%'} autoPlay={true} loop controls></video>
            </div>

            
            
            {/* Headmaster Welcome */}

            <div className="headmaster section">
                <div className='title_master'>
                    <p className='welcome_title'>Bienvenue à <br></br> Jeanne D’Arc <span>Trilingue</span> School</p>
                    <h2 className='title-section'>La quête de l’excellence</h2>
                    <hr></hr>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    <div className='paragraph col-lg-7 element animate-from-left'>
                                <h4>MOT DU DIRECTEUR</h4>
                                <p>Chers parents,<br />
                                    Fondé en 1921, notre établissement scolaire perpétue une tradition marquée par la quête de l'excellence dans tous nos projets. Nous proposons une pédagogie éducative basée sur la réussite, l'épanouissement, la responsabilisation et la confiance afin de préparer,activement,nos élèves au monde de demain.
                                    <a href='#' className='read_more'>Lire la suite</a> 
                                </p>
                        </div>
                        <div className='image col-lg-5 element animate-from-right'>
                            <img src={Headmaster} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Notre Charte */}
            <div className='notre_charte section'>
                <div className='title_notre_charte'>
                    <h2 className='title-section element animate-from-top'>notre charte</h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="charte_left col-lg-4 animate-from-left">
                            <div className='first card_charte'>
                                <p>Assurer à l'enfant une sécurité <br /> affective et physique</p>
                            </div>
                            <div className='second card_charte'>
                                <p>Respecter les rythmes <br /> et repères de l'enfant</p>
                            </div>
                            <div className='third card_charte'>
                                <p>Garantir à chacun <br /> des soins individualisés</p>
                            </div>
                        </div>

                        <div className="charte_centre col-lg-4 animate-from-in">
                            <img src={ImageChorte}></img>
                        </div>

                        <div className="charte_right col-lg-4 animate-from-right">
                            <div className='fourth card_charte'>
                                <p>Favoriser l'éveil <br /> et l'autonomie de l'enfant</p>
                            </div>
                            <div className='fifth card_charte'>
                                <p>Soutenir l'enfant dans <br /> ses émotions et ses désirs</p>
                            </div>
                            <div className='sixth card_charte'>
                                <p>Situer les parents <br /> au centre de notre projet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* L'enseignement  */}
            <div className='enseignement section'>
                <div className='titleEnseignement animate-from-right' >
                    <h2>UN ENSEIGNEMENT <span>TRILINGUE</span></h2>
                    <h3>D'EXCELLENCE DE <span>LA CRÈCHE AU LYCÉE</span></h3>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='image_enseignement animate-from-left'>
                                <img src={ImageEnseignement}></img>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='paragraph_enseignement animate-from-right'>
                                <p>L'enseignement trilingue adopté par notre établissement aide nos élèves à développer une meilleure sensibilité communicative dans un environnement plurilingue et multiculturel.</p>
                                <p>Jeanne D'Arc Trilingue School a toujours veillé à inculqué à ses apprenants, l'adhésion aux valeurs universelles et cultive en eux l'art de la cohabitation avec les citoyens du monde.</p>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Our School */}

            <div className="choose-our-shcool section">
                <div className='title_our_school'>
                    <h2 className='title-section'>6 raisons <br /> pour nous choisir</h2>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side col-lg-4 animate-from-left">
                            <div className='first card_our_school'>
                                <img src={Raison1}></img>
                                <p>100 ans d'histoire et d'expertise en éducation</p>
                            </div>
                            <div className='second card_our_school'>
                                <img src={Raison2}></img>
                                <p>Une pédagogie bienveillante et innovative</p>
                            </div>
                            <div className='third card_our_school'>
                                <span>XXI</span>
                                <p>Une éducation du 21 me siècle alliant excellence et épanouissement</p>
                            </div>
                            
                            
                        </div>

                        <div className="choose-us-img col-lg-4 animate-from-in">
                            <img src={ImageRaison} className='chooseUsDeskop' alt="" />
                        </div>

                        <div className="right-side col-lg-4 animate-from-right">
                            <div className='fourth card_our_school'>
                                <img src={Raison4}></img>
                                <p>Des valeurs humaines au coeur de l'éducation</p>
                            </div>
                            <div className='fifth card_our_school'>
                                <img src={Raison5}></img>
                                <p>Un enseignement personnalisée et centre autour de l'enfant</p>
                            </div>
                            <div className='sixth card_our_school'>
                                <img src={Raison6}></img>
                                <p>Une ouverture au monde: Un programme d'excellence</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cycles */}
            
            <div className='cycles-div section'>
                <div className='title_cycles'>
                    <h2 className='title-section animate-from-top'>nos cycles</h2>
                </div>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="card col-lg-3 animate-from-in">
                            <div className="card-img">
                                <img className="early" src={Early} alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Crèche Maternelle</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="layer layer1"></div>
                        </div>
                        
                        <div className="card col-lg-3 animate-from-in">
                            <div className="card-img">  
                                <img className="early" src={Primary} alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Primaire</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="layer layer2"></div>
                        </div>
                        <div className="card col-lg-3 animate-from-in">
                            <div className="card-img">
                                <img className="early" src={LowerSecondary} alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Collège</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="layer layer3"></div>
                        </div>
                        <div className="card col-lg-3 animate-from-in">
                            <div className="card-img">
                                <img className="early" src={UpperSecondary} alt="" />
                            </div>
                            <div className="card-info">
                                <h3>Lycèe</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                            <div className="layer layer4"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='vie_scolaire section'>
                <div className='title_vieScolaire animate-from-right'>
                    <h2>vie scolaire</h2>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='sliderone animate-from-left'>
                            <Carousel
                                draggable={true}
                                showDots={false}
                                responsive={responsive}
                                infinite={true}
                                keyBoardControl={true}
                                slidesToScroll={1}
                                speed={500}
                                autoPlay={true} 
                                autoPlaySpeed={1000}
                            >
                                <div className='sliderVie'>
                                    <img src={SportSlider}></img>
                                    <div className='text_slide'>
                                        <p><span>a</span>ctivités <br /> <span>s</span>portives</p>
                                    </div>
                                </div>
                                <div className='sliderVie'>
                                    <img src={CuculturellesSlider}></img>
                                    <div className='text_slide'>
                                        <p><span>a</span>ctivités <br /> <span>c</span>ulturelles</p>
                                    </div>
                                </div>
                                <div className='sliderVie'>
                                    <img src={ExtraSlider}></img>
                                    <div className='text_slide'>
                                        <p><span>a</span>ctivités <br /> <span>e</span>xtrascolaires</p>
                                    </div>
                                </div>
                                <div className='sliderVie'>
                                    <img src={SportSlider}></img>
                                    <div className='text_slide'>
                                        <p><span>a</span>ctivités <br /> <span>s</span>ociales</p>
                                    </div>
                                </div>
                                
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='slidertwo animate-from-right'>
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                responsive={responsive}
                                infinite={true}
                                keyBoardControl={true}
                                slidesToScroll={1}
                                autoPlaySpeed={1000}
                                speed={500}
                                autoPlay={true}
                            >
                                <div className='sliderVie'>
                                    <img src={SummerSlider}></img>
                                    <div className='text_slide'>
                                        <p><span>s</span>orties<br /> <span>s</span>colaires</p>
                                    </div>
                                </div>
                                <div className='sliderVie'>
                                    <img src={VoyageSlider}></img>
                                    <div className='text_slide'>
                                        <p><span>v</span>oyage à <br /> <span>l</span>’étranger</p>
                                    </div>
                                </div>
                                <div className='sliderVie'>
                                    <img src={SummerSlider}></img>
                                    <div className='text_slide'>
                                        <p><span>s</span>ummer <br /> <span>c</span>amp</p>
                                    </div>
                                </div>
                                <div className='sliderVie'>
                                    <img src={RobotiqueSlider}></img>
                                    <div className='text_slide'>
                                        <p><span>r</span>obotique <br /> <span></span></p>
                                    </div>
                                </div>
                                
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  );
};

export default Accueil;