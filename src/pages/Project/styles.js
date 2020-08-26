import styled from 'styled-components';

export const ContainerProjects = styled.div`
    padding: 0 40px 40px;

    .img{
        width: 300px;
        height: 150px;
        border-radius: 3px;
    }

    .img-proffy{
        background: url('https://user-images.githubusercontent.com/38691922/91113724-9d614a00-e65c-11ea-82f0-3fbdb3f1bdc5.png') no-repeat;
        background-size: cover;
    }
    .img-twitter{
        background: url('https://user-images.githubusercontent.com/38691922/87491915-c1724a00-c61f-11ea-8870-0ba28fd0e3bc.png') no-repeat;
        background-size: cover;
    }
    .img-ecoleta{
        background: url('https://user-images.githubusercontent.com/38691922/83898570-7b2af080-a72d-11ea-8acb-5871a2740dbf.png') no-repeat;
        background-size: cover;
    }
    .img-dropbox{
        background: url('https://user-images.githubusercontent.com/38691922/89235388-70bd9380-d5c4-11ea-8550-d8f313362a36.png') no-repeat;
        background-size: cover;
    }
    .img-bethehero{
        background: url('https://user-images.githubusercontent.com/38691922/77789226-651ff600-7041-11ea-82c9-49b12e73baeb.png?') no-repeat;
        background-size: cover;
    }
    .img-lista-tarefas{
        background: url('https://user-images.githubusercontent.com/38691922/86487266-07800180-bd34-11ea-9aba-24eef1969b91.png') no-repeat;
        background-size: cover;
    }
    .img-user-management{
        background: url('https://user-images.githubusercontent.com/38691922/84721498-338b3c80-af57-11ea-9289-50a0cb36a3ad.png') no-repeat;
        background-size: cover;
    }
    .img-help-desk{
        background: url('https://user-images.githubusercontent.com/38691922/85953606-07ed5680-b948-11ea-8176-37992decf7f1.png') no-repeat;
        background-size: cover;
    }
    .img-chamada-eletronica{
        background: url('https://user-images.githubusercontent.com/38691922/77796068-648d5c80-704d-11ea-867e-fa3b46bdd0b3.png') no-repeat;
        background-size: cover;
    }
    .img-gympoint{
        background: url('https://user-images.githubusercontent.com/54908803/71585357-048e2500-2af5-11ea-99f7-feca4ff7d5ca.png') no-repeat;
        background-size: cover;
    }
    .img-gobarber{
        background: url('https://camo.githubusercontent.com/705d29784ceee92dd6aa56378e9ce5842ac7133e/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f656c6961736763662f696d6167652f75706c6f61642f76313538373530393539362f476f4261726265722f6d6f636b75705f6f63676769742e706e67') no-repeat;
        background-size: cover;
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