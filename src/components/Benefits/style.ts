import { Divider, Typography } from "antd";
import styled from "styled-components";


export const Container = styled.div`
padding-top: 5vw;
padding-bottom: 5vw;
width: 100vw;
padding-left: 5vw;
padding-right: 5vw;
display: flex;
justify-content: space-between;

`

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 25vw;
	gap: 2vw;
`

export const IconContainer = styled.div`
	width: 7vw;
	height: 7vw;
	background-color: black;
	border: 1px solid #73F9CF;
`

export const CustomDivider = styled(Divider)`
	height: 2px !important;
	background-color: grey;
	margin: 0 !important;
		min-width: 50%;
		width: 80%;

`

export const TextContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const Title = styled(Typography.Title)`
	color: #fff !important;
`
export const Desc = styled(Typography.Paragraph)`
	color: grey;
`
