import styled from "styled-components";
import {  Col,  Image,  Row } from "antd";
import Title from "antd/es/typography/Title";


export const Container = styled(Row)`
padding-top:15vh;
padding-bottom:15vh;

width: 100vw;
padding-left: 5vw;
padding-right: 5vw;
`

export const ImgBlock = styled(Col)`
display: flex;
justify-content: flex-start;
align-items: center;
height: 70vh;
width: 100%;
padding: 2vw;
padding-left: 5vw;
`

export const TextContainer = styled(Col)`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
padding: 2vw;
`

export const Img = styled(Image)`

border-radius: 50%;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5); 
  overflow: hidden;
`

export const MailTitle = styled(Title)`
line-height: 1.5 !important;
color: #73F9CF !important;
cursor: default;
`
export const  SubTitle = styled(Title)`
color: #fff !important;
margin: 0 !important;
`

export const Name = styled.strong`
  color: #fff;
  	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    background: -webkit-linear-gradient(90deg, #000000, #4d1569);
	background: linear-gradient(334deg, #fe095f, #2b876c, #fe095f, #000000),
		linear-gradient(334deg, #2b876c, #2b876c, red, #000000);
    border-radius: 10px;
    padding: 1px 15px;
`