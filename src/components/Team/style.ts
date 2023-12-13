import styled from "styled-components";
import { Title } from "../Benefits/style";
import Link from "antd/es/typography/Link";
import { Typography } from "antd";

export const ColumnBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& svg {
		fill: white;
	}
`;
export const Container = styled(ColumnBox)`
	gap: 12vh;

	margin-bottom: 16vh;
`;

export const MembersContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100%;
	min-height: 40vh;
`;

export const Member = styled(ColumnBox)`
	width: 16vw;
	padding: 24px;
	height: 100%;

	gap: 10px;
	background-color: transparent;
	box-shadow: 0px 0px 33px 0px rgba(115, 249, 207, 0.5),
		inset 0px 0px 33px 0px rgba(115, 249, 207, 1);
	border-radius: 20px;
	color: #fff;
	border: 2px solid #73f9cf;
`;
export const MailTitle = styled(Title)`
	color: #73f9cf !important;
`;
export const Photo = styled.img`
	width: 10vw;
`;
export const TgText = styled(Link)`
	color: #fe095f !important;
	/* color: white !important; */
	font-style: italic;
`;
export const ItalicText = styled.p`
	font-style: italic;
`;
export const Name = styled(Typography.Title)`
	color: #fff !important;
	margin: 0 !important;
	text-align: center;
`;
