import React from 'react';

import { Link } from 'react-router-dom';

import {FaArrowLeft} from 'react-icons/fa';

import './styles';


export default class PageHeader extends React.Component {
    render() {
      return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={FaArrowLeft} alt="Back"/>
                </Link>
            </div>
            <div className="header-content">
                <strong>{this.props.title}</strong>
                {this.props.description && <p>{this.props.description}</p>}
            </div>

            
        </header>
      );
    }
}
