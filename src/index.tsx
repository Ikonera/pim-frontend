import React, { FunctionComponent } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RouterView } from "./Components/RouterView/routerView.component";
import { CssBaseline } from "@material-ui/core";
import { Header } from "./Components/Header/Header.component";
import { Menu } from "./Components/Menu/Menu.component";


const App: FunctionComponent = () => {

	return (
		<>
			<CssBaseline />
			<Header />
			<Menu />
			<RouterView />
		</>
	)
	
};

const rootElement = document.getElementById("root");
render(
	<Router>
		<App />
	</Router>
	, rootElement);
