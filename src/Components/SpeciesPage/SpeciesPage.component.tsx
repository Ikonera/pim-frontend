import axios from "axios"
import React, { FunctionComponent, useState, useEffect } from "react"
import { ButtonCreateNew } from "../ButtonCreateNew/ButtonCreateNew.component"
import { IThing } from "src/Interfaces/IThings.interface"
import { ThingsList } from "../ThingsList/ThingsList.component"

export const SpeciesPage: FunctionComponent = () => {

    const [allSpecies, setAllSpecies] = useState<Array<IThing>>([])

    const getAllSpecies = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/specie/allSpecies`)
            if (response.data.length !== 0) {
                setAllSpecies(response.data)
                console.log(response.data)
            }
        }
        catch (error: any) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getAllSpecies()
    }, [])

    return (
        <section>
            <div>
                <p>Species page</p>
            </div>
            <div>
                <ButtonCreateNew type="specie" />
                <ThingsList things={allSpecies} context="Espèces" />
            </div>
        </section>
    )

}