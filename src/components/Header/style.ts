import styled from "styled-components";
import { Layout, Menu as AMenu, Button } from "antd";

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

`

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
`;

export const Menu = styled(AMenu)`
height: 100%;
	& .ant-menu-item {
		display: flex;
		align-items: center;
		color: #fff;
		transition: all 0.3 ease-out;
		font-size: 1.6rem;
		font-weight: 400;
	
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
`;

export const HeaderBtn = styled(Button)`
	width: 10vw;
	height: 45%;
  background-color: #FE095F; 
  color: #FFFFFF; 
  border: none; 
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2); 
  transition: all 0.3s ease; 
  
  &:hover, &:focus {
    background-color: #73F9CF;
    color: #222A35; 
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); 
  }
  
  &:active {
    transform: translateY(2px); 
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3); 
  }
`;