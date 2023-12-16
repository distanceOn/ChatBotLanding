import { AnchorProps } from "antd";
import * as S from "./style";
import { Logo } from "../../assets/logo.tsx";
export const Header = () => {
	// добавить onClick
	const menuItems: AnchorProps["items"] = [
		{
			key: "about",
			href: "#about",
			title: "О нас",
		},
		{
			key: "benefits",
			href: "#benefits",
			title: "Преимущества",
		},
		{
			key: "functions",
			href: "#functions",
			title: "Функционал",
		},
		{
			key: "map",
			href: "#map",
			title: "Road map",
		},
		{
			key: "team",
			href: "#team",
			title: "Контакты",
		},
	];
	return (
		<S.Header>
			<S.Logo>
				<Logo />
			</S.Logo>
			<S.Menu
				targetOffset={100}
				style={{ backgroundColor: "black" }}
				direction="horizontal"
				items={menuItems}
			/>
			<S.HeaderBtn target="_blank" href="https://vk.com/sirius_helper">Запустить</S.HeaderBtn>
		</S.Header>
	);
};
