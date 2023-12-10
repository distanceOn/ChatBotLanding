import { MenuProps } from "antd";
import * as S from "./style";
import {Logo} from '../../assets/logo.tsx'
export const Header = () => {
	// добавить onClick
	const menuItems: MenuProps["items"] = [
		{ label: "О нас", key: "about" },
		{ label: "Преимущества", key: "15" },
		{ label: "Road map", key: "map" },
		{ label: "Наша команда", key: "team" },
		{ label: "Контакты", key: "contacts" },
	];
	return (
		<S.Header>
			<S.Logo><Logo/></S.Logo>
			<S.Menu
				style={{ backgroundColor: "black" }}
				theme="dark"
				mode="horizontal"
				items={menuItems}
			/>
			<S.HeaderBtn>Запустить</S.HeaderBtn>
		</S.Header>
	);
};
