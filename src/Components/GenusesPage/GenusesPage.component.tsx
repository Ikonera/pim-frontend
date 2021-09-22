import axios from "axios"
import React, { FunctionComponent, useState, useEffect } from "react"
import { IThing } from "src/Interfaces/IThings.interface"
import { ThingsList } from "../ThingsList/ThingsList.component"

export const GenusesPage: FunctionComponent = () => {

    const [allGenuses, setAllGenuses] = useState<Array<IThing>>([])

    const getAllGenuses = async () => {
        try {
            const response = await axios.get(`https://pim.gabriel-millet.fr/api/v1/genus/allGenuses`)
            if (response.data.length !== 0) {
                setAllGenuses(response.data)
                console.log(response.data)
            }
        }
        catch (error: any) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getAllGenuses()
    }, [])

    return (
        <section>
            <div>
                <p>Genuses page</p>
            </div>
            <div>
                <ThingsList things={allGenuses} context="Gènes" />
            </div>
        </section>
    )

}