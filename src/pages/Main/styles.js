import styled, { keyframes } from 'styled-components';

export const ContainerMain = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    

    @media only screen and (max-width: 750px){
        display: grid;
        grid-template-columns: 1fr ;
        grid-template-areas: 
            "aboutme"
            "card"
        ;
    }

`;

const animationCard = keyframes`
  from{
    transform: translate(-100%);
  }
  to {
    transform: translate(0%);
  }
`;

export const Card = styled.div`
    width: 45%;
    padding: 20px;
    color: #EBEBEB;
    font-weight: bold;
    letter-spacing: 2px;

    animation-name: ${animationCard};
    animation-duration: 1s;
    animation-timing-function: ease-out;
	animation-fill-mode: both;

    .cardContent{
        background: #202024;
        margin-top: 15px;
        padding: 30px 40px;
        border: none;
        border-radius: 8px;

        transition: 0.5s;

        h1{
            color: #FFFFFF;
            margin-bottom: 10px;
            letter-spacing: normal;
        }
        span{
            color: #93939D;
            letter-spacing: normal;
            font-weight: normal;
        }

    }

    .cardContent:hover{
        transform: scale(1.05)
    }

    .cardHeader{
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
            font-size: 11px;
            font-weight: bold;
            color: #F4F4F4;
            letter-spacing: 2px;
        }
        .icon{
            color:  #03BADC;
            font-size: 20px;
        }
    }

    #social-network{
        display: none;
    }

    @media only screen and (max-width: 900px){
        width: 50%;
    }

    @media only screen and (max-width: 750px){
        width: 100%;
        grid-area: card;

        #social-network{
            display: flex;
            align-items: center;

            margin: 10px 0 5px;

        }

    }
`;

const animationAboutMe = keyframes`
  from{
    transform: translate(100%);
  }
  to {
    transform: translate(0%);
  }
`;

export const AboutMe = styled.div`
    padding: 20px;
    width: 45%;

    position: relative;

    color: white;

    animation-name: ${animationAboutMe};
    animation-duration: 1s;
    animation-timing-function: ease-out;
	animation-fill-mode: both;

    #apresentation{
        span{
            font-weight: bold;
            letter-spacing: 2px;
        }

        h1{
            margin: 10px 0 20px;
            font-size: 50px;
        }
    }

    #description{
        font-size: 15px;
        span{
            color: #F4F4F4;
            font-weight: bold;
            line-height: 20px
        }
        p{
            color: #93939D;
            margin-top: 30px;
            font-weight: 600;
            line-height: 20px
        }
    }

    #expertise{
        font-weight: bold;
        letter-spacing: 1px;

        margin: 50px 0 0; 

        div{
            display: flex;
            margin: 15px 0 0;
            color: #93939D;

            transition: 0.5s;
        }

        div:hover{
            color: #F4F4F4;
            letter-spacing: 3px
        }

        p{
            margin: 0 10px;
        }

    }

    #social-network{
        display: flex;
        align-items: center;

        position: absolute;
        bottom: 10px;

    }

    @media only screen and (max-width: 900px){
        width: 50%;
    }

    @media only screen and (max-width: 750px){
        width: 100%;
        grid-area: aboutme;

        position: unset;

        #social-network{
            position: unset;
            bottom: 0;

            margin-top: 50px;
            display: none;
        }
    }
`;