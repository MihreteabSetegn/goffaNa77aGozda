import React , {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

const ImageSliderTwo = ({slides}) => {

    const [current, setCurrent] = useState(0);

    const length = slides.length;

    if(!Array.isArray(slides) || slides.length <= 0) return null;

    const nextSlide = () => setCurrent(current === length -1 ? 0: current + 1)
    const prevSlide = () => setCurrent(current === 0 ? length - 1: current - 1)


    return (
        <div >
            <h1 style={{color: "white", fontFamily: "cursive", marginTop: "10px", paddingTop: "10px"}}>Discover more ...</h1>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                {slides.map((slide, index) => {
                    return (
                        <div className={index === current? "slideTwo active": "slideTwo"} key={index}>
                            {index === current && (<img src={slide.image} alt="image files" className="imagesSliderTwo"></img>) }
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default ImageSliderTwo;
