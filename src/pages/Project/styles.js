import styled, { keyframes } from 'styled-components';

const animationProjects = keyframes`
  from{
    transform: translate(100%);
  }
  to {
    transform: translate(0%);
  }
`;

export const ContainerProjects = styled.div`
    padding: 0 40px 40px;

    animation-name: ${animationProjects};
    animation-duration: 1s;
    animation-timing-function: ease-out;
	animation-fill-mode: both;

    .img{
        width: 300px;
        height: 150px;
        border-radius: 3px;
    }

    .img-proffy{
        background: url('https://user-images.githubusercontent.com/38691922/91113724-9d614a00-e65c-11ea-82f0-3fbdb3f1bdc5.png') no-repeat;
        background-size: cover;

        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-twitter{
        background: url('https://user-images.githubusercontent.com/38691922/87491915-c1724a00-c61f-11ea-8870-0ba28fd0e3bc.png') no-repeat;
        background-size: cover;

        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-ecoleta{
        background: url('https://user-images.githubusercontent.com/38691922/83898570-7b2af080-a72d-11ea-8acb-5871a2740dbf.png') no-repeat;
        background-size: cover;

        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-dropbox{
        background: url('https://user-images.githubusercontent.com/38691922/89235388-70bd9380-d5c4-11ea-8550-d8f313362a36.png') no-repeat;
        background-size: cover;

        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-bethehero{
        background: url('https://user-images.githubusercontent.com/38691922/77789226-651ff600-7041-11ea-82c9-49b12e73baeb.png?') no-repeat;
        background-size: cover;

        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-lista-tarefas{
        background: url('https://user-images.githubusercontent.com/38691922/86487266-07800180-bd34-11ea-9aba-24eef1969b91.png') no-repeat;
        background-size: cover;

            transition: .3s;
        
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-user-management{
        background: url('https://user-images.githubusercontent.com/38691922/84721498-338b3c80-af57-11ea-9289-50a0cb36a3ad.png') no-repeat;
        background-size: cover;

        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-help-desk{
        background: url('https://user-images.githubusercontent.com/38691922/85953606-07ed5680-b948-11ea-8176-37992decf7f1.png') no-repeat;
        background-size: cover;

        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-chamada-eletronica{
        background: url('https://user-images.githubusercontent.com/38691922/77796068-648d5c80-704d-11ea-867e-fa3b46bdd0b3.png') no-repeat;
        background-size: cover;

        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-gympoint{
        background: url('https://user-images.githubusercontent.com/54908803/71585357-048e2500-2af5-11ea-99f7-feca4ff7d5ca.png') no-repeat;
        background-size: cover;

        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-gobarber{
        background: url('https://user-images.githubusercontent.com/38691922/93595019-4f0a4700-f98d-11ea-8313-00aae8c44fc8.png') no-repeat;
        background-size: cover;
        
        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-beautyshoes{
        background: url('https://user-images.githubusercontent.com/38691922/91891501-87a8e180-ec67-11ea-9ce9-94bcaef541d4.png') no-repeat;
        background-size: cover;
        
        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-caoamigo{
        background: url('https://user-images.githubusercontent.com/38691922/92633865-ce22bf80-f2a9-11ea-86c8-19f6dd8cf8b3.png') no-repeat;
        background-size: cover;
        
        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }
    .img-marvel{
        background: url('https://user-images.githubusercontent.com/38691922/94723986-f4c79980-032f-11eb-851b-6ba8ba4fbdaa.png') no-repeat;
        background-size: cover;
        
        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }

    .img-whats{
        background: url('https://user-images.githubusercontent.com/38691922/103040958-c1259580-4553-11eb-9c06-ba9a1ebd215e.jpeg') no-repeat;
        background-size: cover;
        
        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }

    .img-bank-elixir{
        background: url('https://lh3.googleusercontent.com/proxy/vW_Bqm_4zxofq4_i1OXW5xd-iNvax8LT_UX0knvBhmV6qPBqxlGggRNh9DoU0Vg2qEY0oDi_jIzZErK4zu4u0a2qTGB1VQfyQ62L6nTMHIePSYh6P0NSOtixYRcHd3_VJSzl5cBU') no-repeat;
        background-size: cover;
        
        transition: .3s;
	
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        filter: gray; /* IE */

        &:hover{
            -webkit-filter: none;	
            filter: none;	
        }
    }

    ul{
        list-style-type:none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

    }

    li{       
        transition: 0.5s;

        p{
            color: white;
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
        }
        a{  
            display: flex;
            align-items: center;
            margin: 5px 0 30px 0;
            color: white;
            p{
                margin: 0 10px 0 0;
                font-size: 14px;
                font-weight: normal;
            }
        }
    }

    li:hover{
        transform: scale(1.05)
    }

    @media only screen and (max-width: 1300px){
        .img{
            width: 90%;
            height: 200px;
        }

        ul{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media only screen and (max-width: 1070px){
        .img{
            width: 90%;
            height: 200px;
            background-color: gray;
            
        }

        ul{
            grid-template-columns: 1fr 1fr;
        }
    }

    @media only screen and (max-width: 715px){
        .img{
            width: 100%;
            height: 300px;
        }

        ul{
            grid-template-columns: 1fr;
        }
    }
    @media only screen and (max-width: 515px){
        .img{
            width: 100%;
            height: 180px;
        }

        ul{
            grid-template-columns: 1fr;
        }
    }
    @media only screen and (max-width: 415px){
        .img{
            width: 100%;
            height: 150px;
        }

        ul{
            grid-template-columns: 1fr;
        }
    }

`;
