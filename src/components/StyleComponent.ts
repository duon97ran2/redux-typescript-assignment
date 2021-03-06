import { Card } from "antd";
import styled from "styled-components"

export const StyledButton = styled.button`
padding:10px 20px;
margin-top: 20px;
font-size: 3vh;
font-weight: 700;
border: none;
background-color: var(--ant-primary-color);
color:white;
cursor:pointer;
:hover{
  color:var(--ant-primary-color);
  background-color:white;
}
`;
export const StyledTitle = styled.h2`
font-size: 3em;
text-align:center;
color: var(--ant-primary-color);
font-weight: bold;
margin: 40px 0px 60px 0px;
padding-bottom:20px;
border-bottom:10px solid transparent;
border-image: url(https://www.w3schools.com/css/border.png) 30 stretch;
`;

export const StyledHeader = styled.div`
display: flex;
height: 100%;
justify-content: space-between;
overflow: hidden;
& .ant-menu-horizontal{
  flex: auto;
  justify-content: center;
}
`;
export const StyledNav = styled.ul`
display: flex;
gap: 20px;
& li {
  list-style: none;
  display: inline-block;
  font-size: 20px;
}
& a {
  text-decoration: none;
  }
`;

export const StyledLogo = styled.div`
display:flex;
flex-direction:row;
flex-shrink: 1; 
cursor:pointer;

& h2{
  font-weight:bold;
  font-size:30px;
  background:linear-gradient(263deg, rgba(67,86,205,1) 0%, rgba(0,196,196,1) 0%, rgba(0,212,255,1) 100%) ;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`
export const StyledSlide = styled.div`
  & img{
    width: 100%;
  }
  & h3{
    font-size: 40px;
    color:white;
    margin-bottom: 20px;
    font-weight:700;
  }
  & .ant-card {
    color:white;
    background-color:#141414;
  }
  & h5{
    font-size: 20px;
    color:white;
  }
`;
export const StyledCard = styled.div`
  border-radius:15px;
  overflow:hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  :hover {
    & img{
      transform: scale(1.1);
      transition: linear 0.5s;
    }
    & .ant-card-cover {
      overflow:hidden;
    }
  }
`;
export const StyledTrademark = styled.h5`
background: var(--ant-primary-color); 
padding: 20px; ;
color: white ;
`
export const StyledHeadline = styled.h4`
margin-bottom: 30px;
border-bottom: 1px solid var(--ant-primary-color);
padding-bottom: 15px;
`
export const StyledActionTitle = styled.h2`
margin-bottom:40px;
text-align:center
`
export const LoadingWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
`;
export const styledCarouselItem = styled.div`
  & img {
    width:100%,
    heigth:100%,
    max-width: 660px;
    max-height: 660px;
    object-fit:cover;
  }
`