import { createContext } from "react"

interface IDomainContext {
    allDomains: Array<string>
    setAllDomains: Function
}
interface IReignContext {
    allReigns: Array<string>
    setAllReigns: Function
}
interface IBranchContext {
    allBranches: Array<string>
    setAllBranches: Function
}
interface IClassContext {
    allClasses: Array<string>
    setAllClasses: Function
}
interface IOrderContext {
    allOrders: Array<string>
    setAllOrders: Function
}
interface IFamilyContext {
    allFamilies: Array<string>
    setAllFamilies: Function
}
interface IGenusContext {
    allGenuses: Array<string>
    setAllGenuses: Function
}
interface ISpecieContext {
    allSpecies: Array<string>
    setAllSpecies: Function
}

const DomainContext = createContext<IDomainContext | null>(null)
const ReignContext = createContext<IReignContext | null>(null)
const BranchContext = createContext<IBranchContext | null>(null)
const ClassContext = createContext<IClassContext | null>(null)
const OrderContext = createContext<IOrderContext | null>(null)
const FamilyContext = createContext<IFamilyContext | null>(null)
const GenusContext = createContext<IGenusContext | null>(null)
const SpecieContext = createContext<ISpecieContext | null>(null)

export {
    IDomainContext, DomainContext,
    IReignContext, ReignContext,
    IBranchContext, BranchContext,
    IClassContext, ClassContext,
    IOrderContext, OrderContext,
    IFamilyContext, FamilyContext,
    IGenusContext, GenusContext,
    ISpecieContext, SpecieContext
}