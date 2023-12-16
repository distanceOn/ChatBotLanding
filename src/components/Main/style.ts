import styled from "styled-components";
import { Button, Image } from "antd";
import Title from "antd/es/typography/Title";

export const Container = styled.div`
	padding-top: 15vh;
	padding-bottom: 15vh;

	width: 100vw;
	padding-left: 5vw;
	padding-right: 5vw;

	display: flex;

	@media (max-width: 425px) {
		flex-wrap: wrap-reverse;
		gap: 2vh;
		padding-bottom: 5vh;
		justify-content: center;
	}
`;

export const ImgBlock = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	height: 70vh;
	width: 100%;
	padding: 2vw;
	padding-left: 5vw;

	@media (max-width: 425px) {
		height: 100%;
		justify-content: center;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	padding: 2vw;
`;

export const Img = styled(Image)`
	border-radius: 50%;
	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
	overflow: hidden;

	height: 25vw !important;
	width: 25vw !important;

	@media (max-width: 425px) {
		height: 50vw !important;
		width: 50vw !important;
		justify-content: center;
	}
`;

export const MailTitle = styled(Title)`
	line-height: 1.5 !important;
	color: #73f9cf !important;
	cursor: default;

	@media (max-width: 425px) {
		font-size: 6vw !important;
	}
`;
export const SubTitle = styled(Title)`
	color: #fff !important;
	margin: 0 !important;

	@media (max-width: 425px) {
		font-size: 1.4rem !important;
	}
`;

export const Name = styled.strong`
	color: #fff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
	background: -webkit-linear-gradient(90deg, #000000, #4d1569);
	background: linear-gradient(334deg, #fe095f, #2b876c, #fe095f, #000000),
		linear-gradient(334deg, #2b876c, #2b876c, red, #000000);
	border-radius: 10px;
	padding: 1px 15px;
`;

export const StartBtn = styled(Button)`
	display: none;

	width: 10vw;
	height: 45%;
	background-color: #fe095f;
	color: #ffffff;
	border: none;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease;
	margin-top: 5vh;

	&:hover,
	&:focus {
		background-color: #73f9cf;
		color: #222a35;
		box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
	}

	&:active {
		transform: translateY(2px);
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
	}

	@media (max-width: 425px) {
		width: 200px;
		display: block;
	}
`;
