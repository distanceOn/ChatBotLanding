import * as S from "./style.ts";
import character from "../../assets/character.webp";
export const Main = () => {
	return (
		<S.Container id="about">
			<S.StartBtn target="_blank" href="https://vk.com/sirius_helper" size="large">Запустить</S.StartBtn>

			<S.TextContainer>
				<S.MailTitle>
					Умный цифровой помощник Главы района <S.Name>Сириус</S.Name>
				</S.MailTitle>
				<S.SubTitle level={3}>
					Сириус — это революционный шаг в области цифрового
					взаимодействия между жителями Якутии и администрацией
					региона. За его основу взята мощная нейросеть, способная к
					обучению и самосовершенствованию, что позволяет ему не
					только предоставлять актуальную информацию, но и непрерывно
					улучшать качество взаимодействия с пользователями.
				</S.SubTitle>
			</S.TextContainer>
			<S.ImgBlock>
				<S.Img preview={false} src={character} />
			</S.ImgBlock>
		</S.Container>
	);
};
