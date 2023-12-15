import { Col, Divider, Row, Typography } from "antd";
import styled from "styled-components";

export const Container = styled(Row)`
	padding-top: 15vw;
	padding-bottom: 15vw;
	width: 100vw;
	padding-left: 5vw;
	padding-right: 5vw;
`;

export const TextContainer = styled(Col)`
	display: flex;
	flex-direction: column;
`;

export const VideoContainer = styled(Col)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Video = styled.div`
	border: 1px solid white;
	width: 100%;
	height: 60%;
`;

export const Title = styled(Typography.Title)`
	color: #73f9cf !important;
	font-size: 3vw !important;
	margin: 0 !important;

	@media (max-width: 425px) {
		font-size: 6vw !important;
	}
`;

export const CustomDivider = styled(Divider)`
	background-color: grey;
	height: 2px !important;
	min-width: 50%;
	width: 80%;
	margin-top: 1vw !important;
	margin-bottom: 1vw !important;
`;

export const Item = styled.div`
	display: flex;
	gap: 2vw;
	width: 80%;
`;
export const ItemIcon = styled.div`
	width: 3vw;
	height: 3vw;
	border: 1px solid #73f9cf;
`;

export const ItemText = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
`;

export const Subtitle = styled(Typography.Title)`
	color: #fff !important;
`;

export const Desc = styled(Typography.Paragraph)`
	color: grey;
`;
