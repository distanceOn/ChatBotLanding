import dmitriy from "../../assets/dmitriy.jpg";
import igor from "../../assets/igor.png";
import snejana from "../../assets/snejana.png";
import roma from "../../assets/roma.png";
import sasha from "../../assets/sasha.png";

import * as S from "./style";
import { Typography } from "antd";
import { Arrow } from "../Arrow/Arrow";

const members = [
	{
		photo: dmitriy,
		name: "Дмитрий",
		surname: "Диденко",
		tg: "@Telrielnor",
		role: "Data Scientist",
		subrole: "TeamLead",
	},
	{
		photo: igor,
		name: "Игорь",
		surname: "Шахматов",
		tg: "@Igor_Shakhmatov_DS",
		role: "Data Scientist",
		subrole: 'Backend Developer'
	},
	{
		photo: snejana,
		name: "Снежана",
		surname: "Маркив",
		tg: "@SnowflakeMoscow",
		role: "Data Scientist",
		subrole: 'Lawyer',
	},
	{
		photo: roma,
		name: "Роман",
		surname: "Кондрашев",
		tg: "@distanceOn",
		role: "Frontend Developer",
		subrole: 'Project Manager'
	},
	{
		photo: sasha,
		name: "Александра",
		surname: "Попко",
		tg: "@makogonova",
		role: "Frontend Developer",
		subrole: 'Product Designer'
	},
];
export const Team = () => {
	return (
		<S.Container id="team">
			<S.MailTitle>Наша команда</S.MailTitle>
			<S.MembersContainer>
				{members.map(({ photo, name, surname, tg, role, subrole }, i) => {
					return (
						<S.Member key={i}>
							<S.Photo src={photo} alt="" />

							<S.Name level={5}>
								{name} {surname}
							</S.Name>
							<S.ColumnBox>
								<p>ТГ:</p>
								<Typography.Paragraph
									style={{ margin: 0, color: "#fff" }}
									copyable
								>
									{tg}
								</Typography.Paragraph>
							</S.ColumnBox>

							<S.ItalicText>{role}</S.ItalicText>
							<S.ItalicText>{subrole}</S.ItalicText>
						</S.Member>
					);
				})}
			</S.MembersContainer>
			<Arrow />
			<S.HeaderBtn  target="_blank" href="https://t.me/distanceOn" size="large" type="default">
				Связаться с нами
			</S.HeaderBtn>
		</S.Container>
	);
};
