import '../App.css';
import logo from '../imgs/ic_wallpaper.png';
import download from '../imgs/download.png';
import app from '../other_files/app-debug.apk';

import ReactPlayer from 'react-player'

function About() {
    let summary = "Physics in Color is a live wallpaper application for Android with interactive 3D physics simulations and an animated implicit graphing algorithm."
    let more_info = "Have you ever struggled to find an interesting live wallpaper application for Android? Are you inspired by science and physics concepts but never get the actual chance to play around with your own physics simulations? Are you a math geek who just can't find an implicit graphing application capable of plotting 4-variable equations so you can define elaborate 3D shapes that morph over time and show off to your friends? Well we have got a solution for you!!! Our program packages all of these features and more into a single easy-to-use Android service that displays in your smartphone's background, and optionally, as its lock screen. Physics in Color is a live wallpaper application for Android that delivers users vibrant interactive 3D physics simulations and animated implicit graphs of equations that take the form f(x, y, z, t) = g(x, y, z, t). Users can share their visualization settings including simulation parameters, equations, images, 360 degree backgrounds, and screenshots with other users among an online community of creators. Most people in this modern age has access to a smartphone. Our application allows Android users to convert their lifeless smartphone backgrounds into a fun and intuitive way to explore the beauty of math and physics. Our primary audience includes math and physics geeks, children, adults, toddlers, electronic music enthusiasts, the easily bored, and people who are just plain tired of their average static smartphone background. By delivering a more stimulative and interactive experience, our application aims to inspire creativity and exploration within the challenging fields of math and physics."
    
    return (
    <div className="About">
        <div className="About-Title">
            <img className="About-Logo" src={logo} alt="LiveWallz Logo" />
            <h1 className="About-Name">LiveWallz</h1>
        </div>
        <div>
            <h2 className="About-Title">Project Summary</h2>
            <p className="About-Summary">{summary}</p>
            <h2 className="About-Title">Download Now!</h2>
            <a href={app} download>
                <img className="About-Download" src={download} alt="Download"/>
            </a>
            <h2 className="About-More-Title">More Info</h2>
            <p className="About-Extra-Info">{more_info}</p>
        </div>
        <h2 className="About-Title">Demo Video</h2>
        <div className="About-Demo">
            <ReactPlayer
            url={'https://www.youtube.com/watch?v=lwFC8rA9noc'}
            playing={true}
            controls={true}
            muted={true}
            width='560px'
            height='315px'
            />
            {/*
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/lwFC8rA9noc?si=ztW6_VD-t3XZBXm3" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen />
            */}
        </div>
    </div>
    );
}

export default About;
