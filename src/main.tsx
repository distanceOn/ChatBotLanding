import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { App } from "./components/App/App.tsx";
import { AppThemeProvider } from "./components/styles/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppThemeProvider>
			<App />
		</AppThemeProvider>
	</React.StrictMode>
);
