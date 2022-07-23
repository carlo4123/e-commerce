import styled from "styled-components";


export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3E1662;
  border-radius: 1rem;
  overflow: hidden;
  max-width: 28rem;
  cursor: pointer;
  -webkit-transition:  all 500ms cubic-bezier(.165, .84, .44, 1);
    transition: all 500ms cubic-bezier(.165, .84, .44, 1);

    :hover{
  transform: translateY(-8px);

  }

   & .card-body{
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    
   }

    & .card_image-wrapper{
    background-color: #623A86;
    width: 28rem;
    height: 17rem;
    padding: 1.9rem 2.5rem;
    } 
    
    & p{
      font-size: 2rem;
      line-height: 2.4rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

     & span{
      font-size: 1.8rem;
      line-height: 2rem;
      font-weight: 600;
      margin-bottom: 3rem;
    }

    & button{
      margin-top: auto;
    }
    
`


export const CardImageWrapper = styled.div`
  background-color: #623A86;
  width: 28rem;
  height: 17rem;
;


`


// export const CardName = styled.p`
// font-size: 2rem;
// line-height: 2.4rem;
// font-weight: 600;
// margin-bottom: 1rem;
// `

// export const CardPrice = styled.p`
// font-size: 1.8rem;
// line-height: 2rem;
// font-weight: 600;
// margin-bottom: 3rem;

// `

// export const CardBody= styled.div`
// padding: 1.5rem 2rem;
// display: flex;
// flex-direction: column;

// `
