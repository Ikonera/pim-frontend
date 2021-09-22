import axios from "axios"
import React, { FunctionComponent, useState, useEffect } from "react"
import { IThing } from "src/Interfaces/IThings.interface"
import { ThingsList } from "../ThingsList/ThingsList.component"

export const ReignsPage: FunctionComponent = () => {

    const [allReigns, setAllReigns] = useState<Array<IThing>>([])

    const getAllReigns = async () => {
        try {
            const response = await axios.get(`https://pim.gabriel-millet.fr/api/v1/reign/allReigns`)
            if (response.data.length !== 0) {
                setAllReigns(response.data)
                console.log(response.data)
            }
        }
        catch (error: any) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getAllReigns()
    }, [])

    return (
        <section>
            <div>
                <p>Reigns page</p>
            </div>
            <div>
                <ThingsList things={allReigns} context="Règnes" />
            </div>
        </section>
    )

}