import axios from "axios"
import React, { FunctionComponent, useState, useEffect } from "react"
import { IThing } from "src/Interfaces/IThings.interface"
import { ThingsList } from "../ThingsList/ThingsList.component"

export const DomainsPage: FunctionComponent = () => {

    const [allDomains, setAllDomains] = useState<Array<IThing>>([])

    const getAllDomains = async () => {
        try {
            const response = await axios.get(`https://pim.gabriel-millet.fr/api/v1/domain/allDomains`)
            if (response.data.length !== 0) {
                setAllDomains(response.data)
                console.log(response.data)
            }
        }
        catch (error: any) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getAllDomains()
    }, [])

    return (
        <section>
            <div>
                <p>Domains page</p>
            </div>
            <div>
                <ThingsList things={allDomains} context="Domaines" />
            </div>
        </section>
    )

}