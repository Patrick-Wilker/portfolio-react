import styled, {keyframes, css} from 'styled-components';

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const Footer = styled.div`

    ${props => props.loading && css`
        svg{
            animation: ${rotate} 2s linear infinite;
        }
    `}


    #social-network{
        display: flex;
        align-items: center;

        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 20px
        }

        p{
            margin: 0 10px;
        }

        a{
            color: #F4F4F4;
            display: flex;
            align-items: center;
            margin: 0 10px;

            transition: 0.5s;
        }

        a:hover{
            transform: scale(1.1)
        }

    }

    @media only screen and (max-width: 750px){
        width: 100%;

        #social-network{
            display: flex;
            align-items: center;

            margin-top: 30px;
            font-weight:normal;
            
            img{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 20px
            }

            p{
                margin: 0 10px;
            }

            a{
                color: #F4F4F4;
                display: flex;
                align-items: center;
                margin: 0 10px;

                transition: 0.5s;
            }

            a:hover{
                transform: scale(1.1)
            }

        }
    }
`;
