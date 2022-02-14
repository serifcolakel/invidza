import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from '../styles/Home.module.scss'
import "slick-carousel/slick/slick-theme.css";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md'
import { AiFillStar } from 'react-icons/ai'

export default function Sliders({ data, show, imageClass, cardClass }) {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className={styles.sliderIconNext}
                onClick={onClick}
            >
                <MdArrowForwardIos size={30} />
            </div>
        );
    }

    function SamplePrevArrow(props) {

        const { onClick } = props;
        return (
            <div
                className={styles.sliderIconPrev}
                onClick={onClick}
            >
                <MdOutlineArrowBackIos size={30} />
            </div>
        );
    }
    const settings = {
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: show,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className={styles.sliders}>
            <Slider {...settings}>
                {data.map((card, index) => (
                    <div key={index} className={styles.slider} >
                        <div className={styles.sliderText}>
                            <img src={card.imgUrl} alt={card.title} className={imageClass} />
                            <div >
                                <h3>{card.title}</h3>
                                {show === 2 ?
                                    <div>
                                        {[1, 2, 3, 4, 5].map((star, index) => (
                                            <AiFillStar key={index} size={20} style={{ marginBottom: 20, color: "gold" }} />
                                        ))}
                                    </div> : null
                                }

                            </div>
                        </div>
                        <p>{card.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}
