import styled from "styled-components";
import { Layout, Button, Anchor } from "antd";

const { Header: AHeader } = Layout;

export const Header = styled(AHeader)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100vw;
	padding: 0 5vw;
	height: 12vh;
	background-color: black;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
	z-index: 1000;

	@media (max-width: 425px) {
		overflow: auto;
		width: 100vw;
	}
`;

export const Logo = styled.div`
	width: 7rem;
	height: 7rem;
	display: flex;
	justify-content: center;
	cursor: pointer;
	transition: transform 0.1s ease-out;

	&:hover {
		transform: scale(1.05); /* Небольшое увеличение размера при наведении */
	}
	&:active {
		transform: translateY(2px);
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
	}
	@media (max-width: 425px) {
		display: none;
	}
`;

export const Menu = styled(Anchor)`
	height: 100%;
	& .ant-anchor-ink,
	.ant-anchor-ink-visible {
		background-color: #73f9cf !important;
	}
	& .ant-anchor-link {
		display: flex;
		align-items: center;
		color: #fff;
		transition: all 0.3 ease-out;
		font-size: 1.6rem;
		font-weight: 400;

		& a {
			color: white !important;
		}
		&:hover {
			color: #73f9cf !important; /* Цвет при наведении */

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

	@media (max-width: 425px) {
		padding-right: 20px;
	}
`;

export const HeaderBtn = styled(Button)`
	width: 10vw;
	height: 45%;
	background-color: #fe095f;
	color: #ffffff;
	border: none;
	box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease;

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
	}
`;
