import React, {Component} from 'react';

import api from '../../services/apiGithub';
import {FaGithub, FaLinkedin, FaSpinner} from 'react-icons/fa';

import {Footer} from './styles';

export default class SocialNetwork extends Component {

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


    render() {

        const {user, loading} = this.state;

      return (
        <Footer loading={loading}>
            <div id="social-network">
                
                { loading ? (
                    <FaSpinner color="#FFF" size={14} />
                )  : (
                    <img src={user.avatar_url} alt="profile"/>
                )  }
                
                <a target="_blank" href="https://www.linkedin.com/in/patrickmota10/">
                    <FaLinkedin/>
                    <p>LinkedIn</p>
                </a>
                <a target="_blank" href="https://github.com/Patrick-Wilker">
                    <FaGithub/>
                    <p>GitHub</p>
                </a>
            </div>
        </Footer>
      );
    }
}
