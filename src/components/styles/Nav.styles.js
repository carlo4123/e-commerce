import { Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`

  background-color: #FDBA21;


  & .nav-container{
    width: 100%;
    max-width: 136rem;
    padding: 2.5rem 3rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  & .nav-menu{
    display: flex ;
  }


`

export const NavLink = styled(Link)`
    font-size: 1.8rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    text-decoration: none;
    -webkit-transition:  all 500ms cubic-bezier(.165, .84, .44, 1);
    transition: all 500ms cubic-bezier(.165, .84, .44, 1);

  :hover{
  transform: translateY(-3px);

  }
  
  &:not(:last-child){
    margin-right:  2rem;
  }

  & img{
    width: 2.4rem;
    -webkit-transition:  all 500ms cubic-bezier(.165, .84, .44, 1);
    transition: all 500ms cubic-bezier(.165, .84, .44, 1);
    :hover{
    transform: translateY(-3px);
    }
  }

 
  
 ` 