import React, {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);

    const length = slides.length;

    if(!Array.isArray(slides) || slides.length <= 0) return null;

    const nextSlide = () => setCurrent(current === length -1 ? 0: current + 1)
    const prevSlide = () => setCurrent(current === 0 ? length - 1: current - 1)

    return (
        <div style={{ marginTop: "20px"}}>
            <h1 style={{color: "white", fontFamily: "cursive"}}>Giving back to the community</h1>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                {slides.map((slide, index) => {
                    return (
                        <div className={index === current? "slide active": "slide"} key={index}>
                            {index === current && (<img src={slide.image} alt="" className="imagesSlider"></img>) }
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default ImageSlider
