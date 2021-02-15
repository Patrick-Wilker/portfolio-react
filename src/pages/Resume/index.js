import React, {Component} from 'react';

import {ContainerResume} from  './styles';

import PageHeader from '../../components/PageHeader';

import api from '../../services/apiGithub';
import {FaSpinner} from 'react-icons/fa';

export default class Resume extends Component{

    state = {
        user: {},
        loading: true,
    };

    async componentDidMount(){
        const user = await api.get('users/Patrick-Wilker')

        this.setState({
            user: user.data,
            loading: false,
        });
    }

    render(){

        const {user, loading} = this.state;

        return (
            <>
                <PageHeader/>
                <ContainerResume loading={loading}>
                    <header>
                        <div className="img">
                            { loading ? (
                                <FaSpinner color="#FFF" size={14} />
                            )  : (
                                <img src={user.avatar_url} alt="profile"/>
                            )  }
                        </div>
                        <div className="header-text">
                            <h1>Patrick Wilker Vieira Mota</h1>
                            <p><strong>E-mail:</strong> patrickvieiramota@gmail.com</p>
                            <p><strong>Tel.:</strong> +55 38 9 9822-9450</p>
                        </div>
                        
                    </header>
                    <main>
                        <section className="left">
                            <div className="profile">
                                <h1>Profile</h1>
                                <p>
                                    I've been in the programming area since I was 17 and I never stopped. I currently work as a 
                                    web Developer at TECNA Sistemas. I have already been part of the web application development 
                                    team at the Software Factory, working with the most varied technologies and also as a Monitor 
                                    for Algorithms and Programming in the C language. I am studying the sixth period of the Bachelor of 
                                    Information Systems course at the Federal Institute of Northern Minas Gerais - Campus Arinos.
                                    <br/><br/>
                                    I always try to bring unique and unforgettable experiences in my projects.
                                </p>
                            </div>

                            <div className="employment">
                                <h1>Employment History</h1>

                                <p>
                                    <strong>Web developer, TECNA Sistemas</strong>
                                    <small>January 2021 - Present</small> 
                                </p>
                                <p>
                                    <strong>Monitor algorithms and programming, IFNMG - Arinos</strong>
                                    <small>October 2020 - December 2020</small> 
                                </p>
                                <p>
                                    <strong>Intern, TECNA Sistemas</strong>
                                    <small>November 2020 - December 2020</small> 
                                </p>
                                <p>
                                    <strong>Software Factory, Arinos - MG</strong>
                                    <small>September 2019 - December 2020</small> 
                                </p>

                            </div>

                            <div className="education">
                                <h1>Education</h1>
                                <p>
                                    <strong>Information Systems, Instituto Federal do Norte de Minas Gerais - Campus Arinos</strong>
                                    <small>January 2018 - December 2021</small>                                 
                                </p>
                            </div>
                        </section>

                        <section className="right">
                            <div className="skills">
                                <h2>Skills</h2>
                                <ul>
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Node.js</li>
                                    <li>ReactJS</li>
                                    <li>Python</li>
                                    <li>C</li>
                                </ul>
                            </div>

                            <div className="languages">
                                <h2>Languages</h2>
                                <ul>
                                    <li>Portuguese</li>
                                    <li>English</li>
                                </ul>
                            </div>
                        </section>
                    </main>
                </ContainerResume>
            </>
        );
    }

    
}
