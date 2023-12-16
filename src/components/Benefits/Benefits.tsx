import * as S from "./style";

type Item = {
	icon: string;
	title: string;
	desc: string;
};
export const Benefits = () => {
	const items: Item[] = [
		{
			icon: "",
			title: "Скорость и эффективность",
			desc: "Благодаря мощности нейросетей, Сириус обрабатывает запросы с невероятной быстротой",
		},
		{
			icon: "",
			title: "Персонализированный подход",
			desc: "ИИ анализирует ваши прошлые запросы, чтобы сделать будущие взаимодействия ещё более целенаправленными",
		},
		{
			icon: "",
			title: "Прогрессивное обучение",
			desc: "С каждым новым запросом Сириус улучшает свои функции, делая информационную поддержку всё более качественной",
		},
	];
	return (
		<S.Container id="benefits">
			{items.map((item, key) => {
				return (
					<S.Item key={key}>
						<S.IconContainer></S.IconContainer>
						<S.CustomDivider />
						<S.TextContainer>
							<S.Title level={2}>{item.title}</S.Title>
							<S.Desc>{item.desc}</S.Desc>
						</S.TextContainer>
					</S.Item>
				);
			})}
		</S.Container>
	);
};
