import React, {Component} from 'react';
import '../App.css';
import '../mobile.css';


class AboutMe extends Component {

    render() {
        return (
            <section>
            <div className="backimg"></div>
            <div className="aboutme">
                <div  className="ramble">
                    <p className="big1">Hello, here's me,</p>
                    <div className="ramblex">
                        <p className="medium">I am...</p>
                        <p className="small">An English ex-pat, a wanderer who loves a new city and a new experience</p>
                        <p className="medium">Can't get enough of </p>
                        <p className="small">Currently obsessed with <a href="https://www.reddit.com/r/GifRecipes/">Gif Recipes</a> </p>
                        <p className="medium">Latest read</p>
                        <p className="small">The Midwich Cukoos - John Wyndham</p>
                        <p className="medium">Latest binge watch</p>
                        <p className="small">Some Girls</p>
                        <p className="medium">Track on Repeat</p>
                        <p className="small"><a href="https://www.youtube.com/embed/hi4pzKvuEQM">Chet Faker - Gold</a></p>
                        <p className="medium">I love...</p>
                        <p className="small">Memes, Yoga, Doggos, & Sushi</p>
                        </div>
                </div>
            </div> </section>

        );
    }
}

export default AboutMe;