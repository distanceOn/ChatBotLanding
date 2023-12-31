import * as S from "./style";
import {
	SearchOutlined,
	DatabaseOutlined,
	CustomerServiceOutlined,
} from "@ant-design/icons";
import Query1 from '../../assets/query.jpg'
import Query2 from '../../assets/query2.jpg'


export const Functions = () => {
	const items = [
		{
			icon: () => <SearchOutlined />,
			title: "Глубокое понимание",
			desc: "Сириус точно интерпретирует ваши вопросы и предоставляет наиболее релевантные ответы",
		},
		{
			icon: () => <DatabaseOutlined />,
			title: "Обучение на данных",
			desc: "С каждым запросом Сириус становится умнее, оптимизируя свои ответы и предложения для повышения точности и полезности",
		},
		{
			icon: () => <CustomerServiceOutlined />,
			title: "Комплексная поддержка",
			desc: "Если система не найдет готовый ответ, она поможет сформировать обращение к сотруднику администрации и обеспечит вас обратной связью",
		},
	];
	return (
		<S.Container id="functions">
			<S.TextContainer>
				<S.Title level={2}>Функционал</S.Title>
				<S.CustomDivider />
				{items.map((item, key) => (
					<div key={key}>
						<S.Item>
							<S.ItemIcon>{item.icon()}</S.ItemIcon>
							<S.ItemText>
								<S.Subtitle>{item.title}</S.Subtitle>
								<S.Desc>{item.desc}</S.Desc>
							</S.ItemText>
						</S.Item>
						<S.CustomDivider />
					</div>
				))}
			</S.TextContainer>
			<S.VideoContainer>
				<S.Photos autoplay>
									<S.Photo preview={false} src={Query1} alt="Запрос"/>
									<S.Photo preview={false} src={Query2} alt="Запрос"/>
    </S.Photos>
			</S.VideoContainer>
		</S.Container>
	);
};
