import { useState } from "react"
import axios from "axios"
import {
	IDomainContext, DomainContext,
    IReignContext, ReignContext,
    IBranchContext, BranchContext,
    IClassContext, ClassContext,
    IOrderContext, OrderContext,
    IFamilyContext, FamilyContext,
    IGenusContext, GenusContext,
    ISpecieContext, SpecieContext
} from "./Contexts.ctx"

const [allDomains, setAllDomains] = useState<Array<string>>([]),
    [allReigns, setAllReigns] = useState<Array<string>>([]),
    [allBranches, setAllBranches] = useState<Array<string>>([]),
    [allClasses, setAllClasses] = useState<Array<string>>([]),
    [allOrders, setAllOrders] = useState<Array<string>>([]),
    [allFamilies, setAllFamilies] = useState<Array<string>>([]),
    [allGenuses, setAllGenuses] = useState<Array<string>>([]),
    [allSpecies, setAllSpecies] = useState<Array<string>>([])

const domainsValue: IDomainContext = {
        allDomains,
        setAllDomains
    },
    reignsValue: IReignContext = {
        allReigns,
        setAllReigns
    },
    branchesValue: IBranchContext = {
        allBranches,
        setAllBranches
    },
    classesValue: IClassContext = {
        allClasses,
        setAllClasses
    },
    ordersValue: IOrderContext = {
        allOrders,
        setAllOrders
    },
    familiesValue: IFamilyContext = {
        allFamilies,
        setAllFamilies
    },
    genusesValue: IGenusContext = {
        allGenuses,
        setAllGenuses
    },
    speciesValue: ISpecieContext = {
        allSpecies,
        setAllSpecies
    }


const getAllDomains = async () => {
	try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/domain/allDomains`)
        setAllDomains(response.data)
    }
    catch (error: any) {
        // TODO: popup with custom error message
        console.log(error.response.data)
    }
},
getAllReigns = async () => {
	try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/reign/allReigns`)
        setAllReigns(response.data)
    }
    catch (error: any) {
        // TODO: popup with custom error message
        console.log(error.response.data)
    }
},
getAllBranches = async () => {
	try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/branch/allBranches`)
        setAllBranches(response.data)
    }
    catch (error: any) {
        // TODO: popup with custom error message
        console.log(error.response.data)
    }
},
getAllClasses = async () => {
	try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/class/allClasses`)
        setAllClasses(response.data)
    }
    catch (error: any) {
        // TODO: popup with custom error message
        console.log(error.response.data)
    }
},
getAllOrders = async () => {
	try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/order/allOrders`)
        setAllOrders(response.data)
    }
    catch (error: any) {
        // TODO: popup with custom error message
        console.log(error.response.data)
    }
},
getAllFamilies = async () => {
	try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/family/allFamilies`)
        setAllFamilies(response.data)
    }
    catch (error: any) {
        // TODO: popup with custom error message
        console.log(error.response.data)
    }
},
getAllGenuses = async () => {
	try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/genus/allGenuses`)
        setAllGenuses(response.data)
    }
    catch (error: any) {
        // TODO: popup with custom error message
        console.log(error.response.data)
    }
},
getAllSpecies = async () => {
	try {
        const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/specie/allSpecies`)
        setAllSpecies(response.data)
    }
    catch (error: any) {
        // TODO: popup with custom error message
        console.log(error.response.data)
    }
}

const initialization = async () => {
    await getAllDomains()
    await getAllReigns()
    await getAllBranches()
    await getAllClasses()
    await getAllOrders()
    await getAllFamilies()
    await getAllGenuses()
    await getAllSpecies()
}

export {
    domainsValue,
    reignsValue,
    branchesValue,
    classesValue,
    ordersValue,
    familiesValue,
    genusesValue,
    speciesValue,
    initialization
}