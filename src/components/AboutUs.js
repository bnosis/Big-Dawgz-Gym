import React from "react";
import "./AboutUs.css";
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-container">
                <h1 className="about-header">Welcome to Big Dawgz Gym</h1>
                <p className="about-paragraph">
                    At <strong>Big Dawgz Gym</strong>, we don’t cater to the weak. This is the place for true alphas who live, breathe, and grind for greatness. 
                    Whether you’re here to dominate the weights or push your limits to the max, Big Dawgz Gym is where you unleash your inner beast.
                </p>
                <p className="about-paragraph">
                    No shortcuts. No excuses. Just pure, unrelenting hard work. Big Dawgz is for those who don't settle for mediocrity. 
                    Here, we crush limits, destroy doubt, and rewrite the rules of what’s possible.
                </p>
                <div className="about-image">
                    <img src="/dog-barbell-mouth.png" alt="Big Dawgz Gym Workout" />
                </div>
                <h2 className="about-subheader">Why Train with Us?</h2>
                <ul className="about-list">
                    <li>Elite-level equipment designed for maximum results.</li>
                    <li>Trainers who push you past your breaking point — because that’s where growth happens.</li>
                    <li>An atmosphere of relentless energy and drive. No distractions, no excuses.</li>
                    <li>Workouts for Dawgz — every day is leg day baby.</li>
                </ul>
                <Link to="/waiver">
                    <button className="about-button">Become an Alpha Dawg</button>
                </Link>
            </div>
        </section>
    );
};

export default AboutUs;