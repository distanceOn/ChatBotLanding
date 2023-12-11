import { Benefits } from "../Benefits/Benefits";
import { Functions } from "../Functions/Functions";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import * as S from "./style";

export const App = () => {
	return (
		<S.App>
			<Header />
			<Main/>
			<Benefits/>
			<Functions/>
		</S.App>
	);
};
