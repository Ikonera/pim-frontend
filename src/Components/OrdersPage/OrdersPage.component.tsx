import axios from "axios"
import React, { FunctionComponent, useState, useEffect } from "react"
import { IThing } from "src/Interfaces/IThings.interface"
import { ThingsList } from "../ThingsList/ThingsList.component"

export const OrdersPage: FunctionComponent = () => {

    const [allOrders, setAllOrders] = useState<Array<IThing>>([])

    const getAllOrders = async () => {
        try {
            const response = await axios.get(`https://pim.gabriel-millet.fr/api/v1/order/allOrders`)
            if (response.data.length !== 0) {
                setAllOrders(response.data)
                console.log(response.data)
            }
        }
        catch (error: any) {
            console.log(error.response.data)
        }
    }

    useEffect(() => {
        getAllOrders()
    }, [])

    return (
        <section>
            <div>
                <p>Orders page</p>
            </div>
            <div>
                <ThingsList things={allOrders} context="Ordres" />
            </div>
        </section>
    )

}