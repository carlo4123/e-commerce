import styled from "styled-components";


export const Heading1 = styled.h1`
  font-size: 6.1rem;
  line-height: 7.3rem;
  font-weight: 700;
  color: ${({colors})=> colors ? colors : "#fff" };

 span{
    color: ${({colors})=> colors ? colors : "#fff" };
  }

`


export const Heading2 = styled.h2`
  font-size: 4.4rem;
  font-weight: 700;
  color: ${({colors})=> colors ? colors : "#fff" };

`
export const Heading3 = styled.h4`
  font-size: 3.3rem;
  font-weight: 700;
  color: ${({colors})=> colors ? colors : "#fff" };

`


export const Heading4 = styled.h4`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({colors})=> colors ? colors : "#fff" };

`

export const Heading5 = styled.h5`
  font-size: 2rem;
  font-weight: 700;
  color: ${({colors})=> colors ? colors : "#fff" };

`


export const Paragraph = styled.p`

  font-size: 1.6rem;
  font-weight: 400;
  color: ${({colors})=> colors ? colors : "#fff" };


`