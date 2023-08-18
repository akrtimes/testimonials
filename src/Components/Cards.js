import React, { useState } from "react";
import './Card.css';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
function Card(props) {
    const reviews = props.reviews;
    const [ind, setIndex] = useState(0);
    const [card, setCard] = useState(reviews[ind]);
    function prevClickHandler() {
        setIndex((ind - 1 + 5) % 5);
        setCard(reviews[ind]);
    }
    function nextClickHandler() {
        setIndex((ind + 1) % 5);
        setCard(reviews[ind]);
    }
    function surpriseHandler() {
        setIndex(Math.floor(Math.random() * 10) % 5);
        setCard(reviews[ind]);
    }

    return (
        <div className="card-container">
            <div className="image-container">
                <img src={card.image} id="profile-img" />
                <div className="image-bg"></div>

            </div>
            <h2 className="name">{card.name}</h2>
            <p className="job">{card.job}</p>

            <div className="description">
                <FaQuoteLeft className="quote" />
                <p className="desc">{card.text}</p>
                <FaQuoteRight className="quote" />
            </div>
            <div className="next-prev-cont">
                <FcPrevious className="next-prev" onClick={prevClickHandler} />
                <FcNext className="next-prev" onClick={nextClickHandler} />
            </div>
            <div className="button-div">
                <button className="random" onClick={surpriseHandler}>Surprise Me</button>
            </div>
        </div>
    );
}
export default Card;