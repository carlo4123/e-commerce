
import styled from "styled-components";


export const CounterWrapper = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;


  & > div{
    background-color: #623A86;
  border-radius: 2px;
  width: 12rem;
  height: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & .counter_input, & button{
    background-color: transparent;
    color: white;
    border: none;
    width: 4rem;
  }

  
  & .counter_input{
    width: 4rem;
    text-align: center;
  }

  & button{
    font-size: 2.4rem;
    cursor: pointer;
  }

 & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  
  }
  



& .remove{
  background-color: transparent;
  border: none;
  color:#AD8CCA ;
  font-size: 1.4rem;
  cursor: pointer;
}


`