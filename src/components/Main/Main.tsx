import { Col } from "antd";
import * as S from "./style.ts";
export const Main = () => {
	return (
		<S.Container id="about">
			<Col span={2} />
			<S.TextContainer span={11}>
				<S.MailTitle>CHATBOT FDSAFDJ DSADAS</S.MailTitle>
				<S.SubTitle level={2}>
					sdjksakjdbbdhsbfhjdsadksnkdsksalkdfbhjdsbfhjbjdhbhjgsbhjbashjfbddsjhbfhjdsbfhjasbhdsbfhjdbsfjhbadhsbdhsjbfsdbfjhbsdhfbdshjfbdsfhbdshjbfhdsbfhjksdbfkhadsb
				</S.SubTitle>
			</S.TextContainer>
			<S.ImgBlock span={11}>
				<S.Img
					preview={false}
					width={"25vw"}
					height={"25vw"}
					src="/public/character.webp"
				/>
			</S.ImgBlock>
		</S.Container>
	);
};
