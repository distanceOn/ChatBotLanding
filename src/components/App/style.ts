import styled, { keyframes } from "styled-components";
import { Layout } from "antd";

const gradient = keyframes`
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const App = styled(Layout)`
	background: -webkit-linear-gradient(90deg, #000000, #4d1569);
	background: linear-gradient(334deg, #2b876c, #2b876c, #000000, #000000),
		linear-gradient(334deg, #2b876c, #2b876c, red, #000000);

	background: linear-gradient(
			217deg,
			rgba(9, 165, 137, 0.8),
			rgba(0, 0, 0, 1) 70.71%
		),
		linear-gradient(127deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 100%),
		linear-gradient(336deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1) 70.71%);

	width: 100vw;
	height: 100vh;

	background-size: 180% 180%;
	animation: ${gradient} 16s ease infinite;
`;
