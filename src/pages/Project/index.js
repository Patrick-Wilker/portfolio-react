import React from 'react';

import PageHeader from '../../components/PageHeader';

import {FaExternalLinkAlt, FaCode} from 'react-icons/fa';

import {ContainerProjects} from './styles';

function Project(){
    return (
        <>
        <PageHeader
            title = "Projects"
            description = "Here are some of the projects that I have developed or participated in the development:"
        />
        <ContainerProjects>
            <ul className="projects">
                <li className="project-item">
                    <div className="img img-bank-elixir"></div>
                    <p>Bank Elixir</p>
                    <a href="https://github.com/Patrick-Wilker/bank-elixir" target="_blank">
                        <p>In development</p> 
                        <FaCode/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-whats"></div>
                    <p>Abrir whats</p>
                    <a href="https://github.com/Patrick-Wilker/abrir-whats" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-marvel"></div>
                    <p>Marvel</p>
                    <a href="https://github.com/Patrick-Wilker/marvel" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-caoamigo"></div>
                    <p>Cão Amigo</p>
                    <a href="https://github.com/Patrick-Wilker/cao-amigo" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-beautyshoes"></div>
                    <p>Beauty Shoes</p>
                    <a href="https://github.com/Patrick-Wilker/beauty-shoes" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-gympoint"></div>
                    <p>Gym Point</p>
                    <a href="https://github.com/Patrick-Wilker/gympoint-api" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-gobarber"></div>
                    <p>GoBarber</p>
                    <a href="https://github.com/Patrick-Wilker/gobarber-api" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-proffy"></div>
                    <p>Proffy</p>
                    <a href="https://github.com/Patrick-Wilker/proffy" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-twitter"></div>
                    <p>Twitter</p>
                    <a href="https://github.com/Patrick-Wilker/twitter-clone" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-ecoleta"></div>
                    <p>Ecoleta</p>
                    <a href="https://github.com/Patrick-Wilker/ecoleta" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-dropbox"></div>
                    <p>DropBox</p>
                    <a href="https://github.com/Patrick-Wilker/DropBox-Clone" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-bethehero"></div>
                    <p>Be the Hero</p>
                    <a href="https://github.com/Patrick-Wilker/be-the-hero" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-lista-tarefas"></div>
                    <p>Lista de tarefas</p>
                    <a href="https://github.com/Patrick-Wilker/lista-de-tarefas" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-user-management"></div>
                    <p>User management</p>
                    <a href="https://github.com/Patrick-Wilker/user-management" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-help-desk"></div>
                    <p>Help Desk</p>
                    <a href="https://github.com/Patrick-Wilker/app-help-desk" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
                <li className="project-item">
                    <div className="img img-chamada-eletronica"></div>
                    <p>Chamada Eletrônica</p>
                    <a href="https://github.com/Patrick-Wilker/Chamada-Eletronica" target="_blank">
                        <p>Open Project</p> 
                        <FaExternalLinkAlt/>
                    </a>
                </li>
            </ul>
        </ContainerProjects>
        </>
    );
}

export default Project