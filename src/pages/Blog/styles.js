import styled from 'styled-components';

export const ContainerBlog = styled.div`
    width: 80%;
    padding: 0 40px 40px;

    position: relative;
    li{
        display: flex;
    }
    .tags{
        display: flex;
        align-items: center;
        color: #93939D;
        p{
            margin-left: 10px;
        }
    }
    .text{
        h1{
            font-size: 34px;
            margin: 20px 0;
            color: white;
        }
        p{
            font-size: 18px;
            color: #93939D;
            margin: 0 0 20px;
        }
    }
    .date{
        span{
            color: #93939D;
            position: absolute;
            bottom: 40px;;
        }
    }

    .img{
        width: 400px;
        height: 240px;
        border-radius: 2px;
    }
    .img-post01{
        background: url('https://miro.medium.com/max/700/1*oVYrWwNiJ5FIauPpW1GW9w.jpeg') no-repeat;
        background-size: cover;
        margin-right: 30px;
    }

    @media only screen and (max-width: 1210px){
        width: 100%;
        
        section{
            width: 50%;
        }
    }

    @media only screen and (max-width: 850px){
        li{
            display: block;
        }
        .img{
            width: 100%;
            height: 500px;
            margin: 0 0 20px;
        }

        section{
            width: 100%;
        }
    }
    @media only screen and (max-width: 750px){
        .img{
            height: 370px;
        }
    }
    @media only screen and (max-width: 610px){
        .img{
            height: 380px;
        }
    }
    @media only screen and (max-width: 550px){
        .img{
            height: 280px;
        }
    }
    @media only screen and (max-width: 450px){
        .img{
            height: 180px;
        }
    }
 
`;