import React, { FunctionComponent } from "react"
import { Switch, Route } from "react-router-dom"
import { BranchesPage } from "../BranchesPage/BranchesPage.component"
import { ClassesPage } from "../ClassesPage/ClassesPage.component"
import { DomainsPage } from "../DomainsPage/DomainsPage.component"
import { FamiliesPage } from "../FamiliesPage/FamiliesPage.component"
import { GenusesPage } from "../GenusesPage/GenusesPage.component"
import { HomePage } from "../HomePage/HomePage.component"
import { OrdersPage } from "../OrdersPage/OrdersPage.component"
import { ReignsPage } from "../ReignsPage/ReignsPage.component"
import { SpecieCategorization } from "../SpecieCategorization/SpecieCategorization.component"
import { SpeciesPage } from "../SpeciesPage/SpeciesPage.component"


export const RouterView: FunctionComponent = () => {

    return (
        <Switch>
            {/* <Route exact path="/taxinomy/newCategorization" component={Form} /> */}
            <Route exact path="/taxinomy/domains" component={DomainsPage} />
            <Route exact path="/taxinomy/reigns" component={ReignsPage} />
            <Route exact path="/taxinomy/branches" component={BranchesPage} />
            <Route exact path="/taxinomy/classes" component={ClassesPage} />
            <Route exact path="/taxinomy/orders" component={OrdersPage} />
            <Route exact path="/taxinomy/families" component={FamiliesPage} />
            <Route exact path="/taxinomy/genuses" component={GenusesPage} />
            <Route exact path="/taxinomy/species" component={SpeciesPage} />
            <Route exact path="/taxinomy/categorization" component={SpecieCategorization} />
            <Route exact path="/" component={SpecieCategorization} />
        </Switch>
    )

}