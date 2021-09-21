import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"

export const Menu: FunctionComponent = () => {

    return (
        <aside>
            <div>
                <p>
                    <Link to="/taxinomy/domains">Liste des domaines</Link>
                </p>
                <p>
                    <Link to="/taxinomy/reigns">Liste des règnes</Link>
                </p>
                <p>
                    <Link to="/taxinomy/branches">Liste des branches</Link>
                </p>
                <p>
                    <Link to="/taxinomy/classes">Liste des classes</Link>
                </p>
                <p>
                    <Link to="/taxinomy/orders">Liste des ordres</Link>
                </p>
                <p>
                    <Link to="/taxinomy/families">Liste des familles</Link>
                </p>
                <p>
                    <Link to="/taxinomy/genuses">Liste des gènes</Link>
                </p>
                <p>
                    <Link to="/taxinomy/species">Liste des espèces</Link>
                </p>
            </div>
        </aside>
    )

}