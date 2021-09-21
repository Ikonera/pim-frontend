import axios, { AxiosError } from "axios"
import React, { FunctionComponent, useState, useEffect, useContext } from "react"
import { ThingsList } from "../ThingsList/ThingsList.component"
import {
	IDomainContext, DomainContext,
    IReignContext, ReignContext,
    IBranchContext, BranchContext,
    IClassContext, ClassContext,
    IOrderContext, OrderContext,
    IFamilyContext, FamilyContext,
    IGenusContext, GenusContext,
    ISpecieContext, SpecieContext
} from "../../Contexts/Contexts.ctx"

export const HomePage: FunctionComponent = () => {

    const { allDomains } = useContext(DomainContext) as IDomainContext,
        { allReigns } = useContext(ReignContext) as IReignContext,
        { allBranches } = useContext(BranchContext) as IBranchContext,
        { allClasses } = useContext(ClassContext) as IClassContext,
        { allOrders } = useContext(OrderContext) as IOrderContext,
        { allFamilies } = useContext(FamilyContext) as IFamilyContext,
        { allGenuses } = useContext(GenusContext) as IGenusContext,
        { allSpecies } = useContext(SpecieContext) as ISpecieContext

    return (
        <main>
            <section>
                <div>
                    <h2>Home page</h2>
                </div>
                <div>
                    <p>Une description de la page...</p>
                </div>
            </section>
            <section>
                <div>
                    <h3>Domaines</h3>
                    <ThingsList things={allDomains} context="Domaines" />
                </div>
                <div>
                    <h3>Règnes</h3>
                    <ThingsList things={allReigns} context="Règnes" />
                </div>
                <div>
                    <h3>Branches</h3>
                    <ThingsList things={allBranches} context="Branches" />
                </div>
                <div>
                    <h3>Classes</h3>
                    <ThingsList things={allClasses} context="Classes" />
                </div>
                <div>
                    <h3>Ordres</h3>
                    <ThingsList things={allOrders} context="Ordres" />
                </div>
                <div>
                    <h3>Familles</h3>
                    <ThingsList things={allFamilies} context="Familles" />
                </div>
                <div>
                    <h3>Gènes</h3>
                    <ThingsList things={allGenuses} context="Gènes" />
                </div>
                <div>
                    <h3>Espèces</h3>
                    <ThingsList things={allSpecies} context="Espèces" />
                </div>
            </section>
        </main>
    )

}