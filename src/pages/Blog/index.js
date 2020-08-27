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