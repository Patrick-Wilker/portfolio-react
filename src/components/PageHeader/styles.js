import styled from 'styled-components';

export const Header = styled.div`
    padding: 40px;

    .top-bar-container{
        a{
            display: flex;
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