import React from 'react';

import {FaTags} from 'react-icons/fa';
import PageHeader from '../../components/PageHeader';

import {ContainerBlog} from './styles';

function Blog(){
    return (
        <>
            <PageHeader
                title = "Blog"
                description = "See posts on development tutorials, programming tips, and technology in general:"
            />

            <ContainerBlog>
                <ul className="post">
                    <a href="https://medium.com/@patrickvieiramota/zendesk-configurando-ambiente-no-windows-10-b30999454e9f" target="_blank">
                        <li className="post">
                            <div className="img img-post03"></div>
                            <section>
                                <div className="tags">
                                    <FaTags/>
                                    <p>Zendesk, Windows 10, Ruby, Configuration, Devkit</p>
                                </div>
                                <div className="text">
                                    <h1>Zendesk: configurando ambiente no Windows 10</h1>
                                    <p>Aprenda a configurar o ambiente de desenvolvimento do Zendesk no Windows 10 de forma fácil</p>
                                </div>
                                <div className="date">
                                    <span>Nov 16, 2020 · 1 min read</span>
                                </div>
                            </section>
                        </li>
                    </a>
                    <a href="https://medium.com/@patrickvieiramota/deploy-de-aplica%C3%A7%C3%A3o-react-no-netlify-40c5be8ac677" target="_blank">
                        <li className="post">
                            <div className="img img-post02"></div>
                            <section>
                                <div className="tags">
                                    <FaTags/>
                                    <p>React, Netlify, Deploy, Comandos, Terminal</p>
                                </div>
                                <div className="text">
                                    <h1>Deploy de aplicação React no Netlify</h1>
                                    <p>Se você precisa fazer o deploy de sua aplicação React o Netlify será uma boa escolha</p>
                                </div>
                                <div className="date">
                                    <span>Sep 09, 2020 · 1 min read</span>
                                </div>
                            </section>
                        </li>
                    </a>
                    <a href="https://medium.com/@patrickvieiramota/programadores-e-suas-maldi%C3%A7%C3%B5es-b888bcddc3ce" target="_blank">
                        <li className="post">
                            <div className="img img-post01"></div>
                            <section>
                                <div className="tags">
                                    <FaTags/>
                                    <p>Code, Programming, Development</p>
                                </div>
                                <div className="text">
                                    <h1>Programadores e suas maldições</h1>
                                    <p>O primeiro post não poderia ser outro. Sim, vamos falar sobre a famosa maldição do...</p>
                                </div>
                                <div className="date">
                                    <span>Aug 26, 2020 · 1 min read</span>
                                </div>
                            </section>
                        </li>
                    </a>
                    
                </ul>
            </ContainerBlog>

        </>
    );
}

export default Blog