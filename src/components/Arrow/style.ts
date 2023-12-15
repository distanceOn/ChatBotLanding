import styled, { keyframes } from "styled-components";

const ani = keyframes`
0% {
    top: 0px;
}
50% {
    top: 30px;
}

100% {
    top: 0px;
}
`;
export const Box = styled.div`
	height: 100px;
	width: 100px;

	position: relative;
`;
export const Svg = styled.svg`
	top: 0;

	width: 100px;
	height: 100px;
	fill: #fff;
	rotate: -90deg;
	position: absolute;
	animation: ${ani} 1.3s infinite;
`;
