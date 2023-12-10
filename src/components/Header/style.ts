import styled from "styled-components";
import { Layout, Menu as AMenu } from "antd";

const { Header: AHeader } = Layout;

export const Header = styled(AHeader)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: black;
`;

export const Logo = styled.h1`
	color: white;
`;

export const Menu = styled(AMenu)`
	& .ant-menu-item {
		color: #fff;
		&:hover {
			color: #73f9cf !important;
			&::after {
				border-bottom-color: #73f9cf !important;
			}
		}
	}

	& .ant-menu-item-selected {
		color: #73f9cf !important;

		&::after {
			border-bottom-color: #73f9cf !important;
		}
	}
`;
