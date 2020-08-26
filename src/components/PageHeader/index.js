import React from 'react';

import { Link } from 'react-router-dom';

import {FaArrowLeft} from 'react-icons/fa';

import {Header} from './styles';

export default class PageHeader extends React.Component {
    render() {
      return (
        <Header>
            <div className="top-bar-container">
                <Link to="/">
                    <FaArrowLeft/>
                    <p>Back</p>
                </Link>
            </div>

            <div className="header-content">
                <h1>{this.props.title}</h1>
                {this.props.description && <p>{this.props.description}</p>}
            </div>
            
        </Header>
      );
    }
}
