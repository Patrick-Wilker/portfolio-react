import styled, { keyframes } from 'styled-components';


const animationHeader = keyframes`
  from{
    transform: translate(-100%);
  }
  to {
    transform: translate(0%);
  }
`;

export const Header = styled.div`
    padding: 40px;

    animation-name: ${animationHeader};
    animation-duration: 1s;
    animation-timing-function: ease-out;
	animation-fill-mode: both;

    .top-bar-container{
        a{
            display: inline-flex;
            text-decoration: none;
            color: #FFFFFF;
            font-size: 20px;
            letter-spacing: 1px;
        }
        p{
            padding: 0 0 0 20px;
        }       
    }
    
    .header-content{
        h1{
            color: white;
            font-size: 45px;
            margin-top: 20px;
        }

        p{
            color: #85858E;
            margin-top: 20px;
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 0.5px;
        }
    }
    
`;