import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"

export const ButtonCreateNew: FunctionComponent<{ type: string }> = ({ type }) => {

    switch (type) {
        case "domain":
            return (
                <Link to="/taxinomy/create/domain">Nouveau Domaine</Link>
            )
            break;
        case "domain":
            return (
                <Link to="/taxinomy/create/reign">Nouveau Règne</Link>
            )
            break;
        case "domain":
            return (
                <Link to="/taxinomy/create/domain">Nouvelle Branche</Link>
            )
            break;
        case "domain":
            return (
                <Link to="/taxinomy/create/domain">Nouvelle Classe</Link>
            )
            break;
        case "domain":
            return (
                <Link to="/taxinomy/create/domain">Nouvel Ordre</Link>
            )
            break;
        case "domain":
            return (
                <Link to="/taxinomy/create/domain">Nouvelle Famille</Link>
            )
            break;
        case "domain":
            return (
                <Link to="/taxinomy/create/domain">Nouveau Gène</Link>
            )
            break;
        case "domain":
            return (
                <Link to="/taxinomy/categorization">Nouvelle Espèce</Link>
            )
            break;
        default:
            return (
                <Link to="/taxinomy/categorization">Nouvelle Espèce</Link>
            )
            break;
    }

}