import React from "react"
import Carousel from "react-bootstrap/Carousel"
import nebo from "../Assets/Image/Nebo.jpg"
import ozero from "../Assets/Image/Ozero.jpg"
import s from "./Carousel.css"

const CarouselBox = (props) =>{
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    width={900} height={1000}
                    className="d-block w-100"
                    src={nebo}/>
                <Carousel.Caption className={s.carouselCaption}>
                    <h1>Hello {props.me}</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    width={900}
                    height={1000}
                    className="d-block w-100"
                    src={ozero}/>
                <Carousel.Caption className={s.carouselCaption}>
                    <h1>Hello {props.me}</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}
export default CarouselBox