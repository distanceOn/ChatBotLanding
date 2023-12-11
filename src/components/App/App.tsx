import { Benefits } from "../Benefits/Benefits";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import * as S from "./style";

export const App = () => {
	return (
		<S.App>
			<Header />
			<Main/>
			<Benefits/>
		</S.App>
	);
};
