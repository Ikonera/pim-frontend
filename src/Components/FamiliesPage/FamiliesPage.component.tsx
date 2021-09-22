import axios from "axios"
import React, { FunctionComponent, useState, useEffect } from "react"
import { IThing } from "src/Interfaces/IThings.interface"
import { ThingsList } from "../ThingsList/ThingsList.component"

export const FamiliesPage: FunctionComponent = () => {

    const [allFamilies, setAllFamilies] = useState<Array<IThing>>([])

    const getAllFamilies = async () => {
        try {
            const response = await axios.get(`https://pim.gabriel-millet.fr/api/v1/family/allFamilies`)
            if (response.data.length !== 0) {
                setAllFamilies(response.data)
                console.log(response.data)
            }
        }
        catch (error: any) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getAllFamilies()
    }, [])

    return (
        <section>
            <div>
                <p>Families page</p>
            </div>
            <div>
                <ThingsList things={allFamilies} context="Familles" />
            </div>
        </section>
    )

}