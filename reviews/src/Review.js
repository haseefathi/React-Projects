import React, {useState} from 'react'
import people from './data'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checkNumber = (newIndex) => {
        if(newIndex >= people.length){
            return 0;
        }
        if(newIndex < 0) {
            return people.length - 1;
        }
        return newIndex;
    };

    const previousReview = () => {
        setIndex((index) => {
           const newIndex = index - 1;
           return checkNumber(newIndex);
        });
    };

    const nextReview = () => {
        setIndex((index) => {
           const newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const randomReview = () => {
        setIndex((index) => {
            let newIndex = Math.floor(Math.random() * people.length );
            if(newIndex === index){
                newIndex = index+1;
            }
            return checkNumber(newIndex);
        });
    }
    return (
        <section className = 'review-card'>
            <div className = "profile-picture-container">
                <span className = 'quote-container'><FaQuoteLeft/></span>
                <img src={image} alt={name} className = "profile-picture" />
            </div>
            <div className = 'review-content'>
                <p className = 'person-name'>{name}</p>
                <p  className = 'person-job'>{job}</p>
                <p  className = 'person-text'>{text}</p>
            </div>
            <div className = 'navigation-buttons'>
                <button className = 'prev-button' onClick = {previousReview}><FaChevronLeft/></button>
                <button className = 'next-button' onClick = {nextReview}><FaChevronRight/></button>
            </div>
            <button className = 'surprise-button' onClick = {randomReview}>Surprise Me</button>
        </section>
    )
}

export default Review
