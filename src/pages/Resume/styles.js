import styled, {keyframes, css} from 'styled-components';

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const ContainerResume = styled.div`
    ${props => props.loading && css`
        svg{
            animation: ${rotate} 2s linear infinite;
        }
    `}
    
    background: #202024;
    width: 70%;
    margin: 0 auto 50px;
    padding: 40px;
    border-radius: 8px;

    header{
        display: flex;
        align-items: center;
        img{
            width: 100px;
            border-radius: 3px;
        } 
        .header-text{
            margin-left: 20px;
            h1{
                color: white;
            }
            p{
                color: #93939D;
                margin: 5px 0; 
            }
        }  
    }

    main{
        display: flex;
        justify-content: space-between;
        h1, h2{
            color: white;
            margin-top: 20px;
        }
        p, li{
            color: #93939D;
            padding: 5px 0;
        }
        p{
            display: grid;
            small{
                margin-top: 5px;
            }
        }
        ul{
            list-style-type:none
        }

        section.right{
            margin-left: 20px;
        }
    
    }

    @media only screen and (max-width: 960px){
        width: 80%;
    }

    @media only screen and (max-width: 900px){
        width: 90%;
    }

    @media only screen and (max-width: 700px){
        width: 97%;
    }

    @media only screen and (max-width: 570px){
        header{
            display: block;
            text-align: center;
            .header-text{
                margin: 10px 0 0;
            }
        }
    }
    @media only screen and (max-width: 500px){
        main{
            display: block;

            section.right{
                margin-left: 0;
                .skills{
                    ul{
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                    }
                }
            }
        }
    }
    @media only screen and (max-width: 400px){
        main{
            section.right{
                .skills{
                    ul{
                        grid-template-columns: 1fr 1fr 1fr;
                    }
                }
            }
        }
    }

`;