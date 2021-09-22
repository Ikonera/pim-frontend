import axios from "axios"
import React, { FunctionComponent, useState, useEffect } from "react"
import { IThing } from "src/Interfaces/IThings.interface"
import { ThingsList } from "../ThingsList/ThingsList.component"

export const BranchesPage: FunctionComponent = () => {

    const [allBranches, setAllBranches] = useState<Array<IThing>>([])

    const getAllBranches = async () => {
        try {
            const response = await axios.get(`https://pim.gabriel-millet.fr/api/v1/branch/allBranches`)
            if (response.data.length !== 0) {
                setAllBranches(response.data)
                console.log(response.data)
            }
        }
        catch (error: any) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getAllBranches()
    }, [])

    return (
        <section>
            <div>
                <p>Branches page</p>
            </div>
            <div>
                <ThingsList things={allBranches} context="Branches" />
            </div>
        </section>
    )

}