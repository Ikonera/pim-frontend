import axios from "axios"
import React, { FunctionComponent, useState, useEffect } from "react"
import { IThing } from "src/Interfaces/IThings.interface"
import { ThingsList } from "../ThingsList/ThingsList.component"

export const ClassesPage: FunctionComponent = () => {

    const [allClasses, setAllClasses] = useState<Array<IThing>>([])

    const getAllClasses = async () => {
        try {
            const response = await axios.get(`https://pim.gabriel-millet.fr/api/v1/class/allClasses`)
            if (response.data.length !== 0) {
                setAllClasses(response.data)
                console.log(response.data)
            }
        }
        catch (error: any) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getAllClasses()
    }, [])

    return (
        <section>
            <div>
                <p>Classes page</p>
            </div>
            <div>
                <ThingsList things={allClasses} context="Classes" />
            </div>
        </section>
    )

}