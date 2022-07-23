import styled from 'styled-components'

export const Button = styled.button`

  background-color: #FDBA21;
  color: #fff;
  border-radius: .8rem;
  font-size: 1.8rem;
  font-weight: 600;
  border: none;
  padding: 1.2rem 3.1rem;
  cursor: pointer;
  -webkit-transition:  all 500ms cubic-bezier(.165, .84, .44, 1);
    transition: all 500ms cubic-bezier(.165, .84, .44, 1);



  &:hover{
    background-color: ${({hoverBGColor})=>  hoverBGColor ? hoverBGColor : "#3E1662"};
  }
 

`