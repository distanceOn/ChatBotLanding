import styled from "styled-components";


export const Container = styled.div`
margin: 5vw 0;
display: flex;
flex-direction: column;
`
export const Titles = styled.div`
font-size: 3vw;
display: flex;
gap: 1vw;
margin-left: 15vw;
color: #73F9CF;
font-weight: 700;
`
export const LeftTitle = styled.h3`

`

export const RightTitle = styled.h3`

`

export const Cont = styled.div`
display: flex;
  flex-direction: row;
  width: 70%;
  min-width: 350px;
  margin: 0 auto;
  justify-content: space-between;
`

export const Left = styled.div`
  border-image: linear-gradient(270deg,  white 0%, #73F9CF 30%) 1;
  border-top: 2px solid;
  width: 100%;
  padding: 2vw;
  border-right: 2px solid #b94841;
  padding-bottom: 5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`

export const Right = styled.div`
   border-image: linear-gradient(90deg, #73F9CF 0%, white 30%) 1;
  border-top: 2px solid;
  width: 100%;
  padding: 2vw;
  padding-bottom: 5vw;
  margin-top: 2.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`

export const MintTitle = styled.h4`
  color: #FE095F;
  text-transform: uppercase;
  font-size: 2vw;
  line-height: 2.5vw;
  border-bottom: grey 1px solid;
  margin-bottom: 0.8rem;
  width: fit-content;
`

export const MintItem = styled.li`
  color: #ececec;
  font-size: 1rem;
  
  width: fit-content;
  &::before {
    content: '- '; 
    padding-right: 1rem; 
    color: grey;
  }
`

export const List = styled.ul`
  line-height: 22px;
  `
export const Mint = styled.div`
width: fit-content;
  margin-top: 30px;
`
