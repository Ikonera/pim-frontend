import React, { FunctionComponent, useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RouterView } from "./Components/RouterView/routerView.component";
import { CssBaseline } from "@material-ui/core";
import { Header } from "./Components/Header/Header.component";
import {
	domainsValue,
    reignsValue,
    branchesValue,
    classesValue,
    ordersValue,
    familiesValue,
    genusesValue,
    speciesValue,
    initialization
} from "./Contexts/init"
import {
	DomainContext,
    ReignContext,
    BranchContext,
    ClassContext,
    OrderContext,
    FamilyContext,
    GenusContext,
    SpecieContext
} from "./Contexts/Contexts.ctx"

const App: FunctionComponent = () => {

	useEffect(() => {
		initialization()
	}, [])

	return (
		<DomainContext.Provider value={domainsValue}>
			<ReignContext.Provider value={reignsValue}>
				<BranchContext.Provider value={branchesValue}>
					<ClassContext.Provider value={classesValue}>
						<OrderContext.Provider value={ordersValue}>
							<FamilyContext.Provider value={familiesValue}>
								<GenusContext.Provider value={genusesValue}>
									<SpecieContext.Provider value={speciesValue}>
										<CssBaseline />
										<Header />
										<RouterView />
									</SpecieContext.Provider>
								</GenusContext.Provider>
							</FamilyContext.Provider>
						</OrderContext.Provider>
					</ClassContext.Provider>
				</BranchContext.Provider>
			</ReignContext.Provider>
		</DomainContext.Provider>
	)
	
};

const rootElement = document.getElementById("root");
render(
	<Router>
		<App />
	</Router>
	, rootElement);
