import React from 'react';

import {FaDesktop} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import {ContainerMain, Card, AboutMe} from './styles';

import SocialNetwork from '../../components/SocialNetwork'

function Main(){
    return (
        <ContainerMain>
            <Card>
                <span>Navigation</span>
                <Link to="/blog">
                    <div className="cardContent">
                        <div className="cardHeader">
                            <span>SEE MY</span>
                        </div>
                        <h1>Blog</h1>
                        <span>Some posts like tutorials, programming tips and more</span>
                    </div>
                </Link>
                <Link to="/projects">
                    <div className="cardContent">
                        <div className="cardHeader">
                            <span>SEE SOME</span>
                        </div>
                        <h1>Projects</h1>
                        <span>See some projects I have developed or participated</span>
                    </div>
                </Link>
                <a href="mailto:patrickvieiramota@gmail.com">
                    <div className="cardContent">
                        <div className="cardHeader">
                            <span>TALK TO ME</span>
                        </div>
                        <h1>Contact</h1>
                        <span>Do you have a project in mind? So contact me and let's make it happen</span>
                    </div>
                </a>
                <Link to="/resume">
                    <div className="cardContent">
                        <div className="cardHeader">
                            <span>SEE MY</span>
                        </div>
                        <h1>Resume</h1>
                        <span>Find out more about me by viewing my resume</span>
                    </div>
                </Link>

                <div id="social-network">
                    <SocialNetwork/>
                </div>

                
                
            </Card>
            <AboutMe>
                <div id="apresentation">
                    <span>About me</span>
                    <h1>Hello, I'm Patrick Mota</h1>
                </div>

                <div id="description">
                    <span>
                        I am passionate about delivering unique projects and promoting unforgettable
                        experiences to people.
                    </span>
                    <p>
                        I'm a fullstack developer with knowledge in PHP, MySQL, JS, HTML, CSS, Node and 
                        React. I am an academic in Bachelor of Information Systems at 
                        IFNMG - Campus Arinos, where I work at the Software Factory.
                    </p>
                </div>

                <div id="expertise">
                    <span>Expertise in</span>
                    <div>
                        <FaDesktop/>
                        <p>- WEB APPLICATIONS</p> 
                    </div>
                </div>

                <div id="social-network">
                    <SocialNetwork/>
                </div>
                
            </AboutMe>
        </ContainerMain>
    );
}

export default Main