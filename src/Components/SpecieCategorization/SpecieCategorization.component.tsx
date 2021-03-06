import { Input } from "@material-ui/core";
import axios from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { IThing } from "src/Interfaces/IThings.interface";
import Styles from "../../Styles";
import SelectInput from "./SelectInput";
import TextAreaInput from "./TextAreaInput";
import TextInput from "./TextInput";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

interface Values {
	firstName?: string;
	lastName?: string;
	favoriteColor?: string;
	notes?: string;
}

const onSubmit = async (values: Values) => {
	await sleep(300);
	window.alert(JSON.stringify(values, undefined, 2));
};


export const SpecieCategorization: FunctionComponent = () => {

    const getAllDomains = async () => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/domain/allDomains`)
			setDomains(response.data)
		}
		catch (error: any) {
			alert(error.response.data.message)
		}
	},getReignsUnderDomain = async (domainId: string) => {
		try {
			console.log(domainId)
			const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/reign/reignsUnderDomain/${domainId}`)
			setReigns(response.data)
		}
		catch (error: any) {
			alert(error.response.data.message)
		}
	},getBranchesUnderReign = async (reignId: string) => {
		try {
			console.log(reignId)
			const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/branch/branchesUnderReign/${reignId}`)
			setBranches(response.data)
			console.log(branches)
			
		}
		catch (error: any) {
			alert(error.response.data.message)
		}
	},getClassesUnderBranch = async (branchId: string) => {
		try {
			console.log(branchId)
			const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/class/classesUnderBranch/${branchId}`)
			setClasses(response.data)
			console.log(classes)
			
		}
		catch (error: any) {
			alert(error.response.data.message)
		}
	},getOrdersUnderClass = async (classId: string) => {
		try {
			console.log(classId)
			const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/order/ordersUnderClass/${classId}`)
			setOrders(response.data)
			console.log(orders)
			
		}
		catch (error: any) {
			alert(error.response.data.message)
		}
	},getFamiliesUnderOrder = async (orderId: string) => {
		try {
			console.log(orderId)
			const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/family/familiesUnderOrder/${orderId}`)
			setFamilies(response.data)
			console.log(families)
			
		}
		catch (error: any) {
			alert(error.response.data.message)
		}
	},getGenusesUnderFamily = async (familyId: string) => {
		try {
			console.log(familyId)
			const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/genus/genusesUnderFamily/${familyId}`)
			setGenuses(response.data)
			console.log(genuses)
			
		}
		catch (error: any) {
			alert(error.response.data.message)
		}
	}
	
	const [domains, setDomains] = useState<Array<IThing>>([]),
		[reigns, setReigns] = useState<Array<IThing>>([]),
		[branches, setBranches] = useState<Array<IThing>>([]),
		[classes, setClasses] = useState<Array<IThing>>([]),
		[orders, setOrders] = useState<Array<IThing>>([]),
		[families, setFamilies] = useState<Array<IThing>>([]),
		[genuses, setGenuses] = useState<Array<IThing>>([])

	useEffect(() => {
		getAllDomains()
	}, [])

	return (
		<Styles>
		<h1>Cat??gorisation de l'esp??ce</h1>
		<p>
			Vous pouvez cat??goriser ici l'esp??ce que vous voulez. Les listes
			d??roulantes se r??duiront en fonction de ce que vous avez s??lectionn??
		</p>
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine, values }) => (
			<form onSubmit={handleSubmit}>
				<div>
					<label>Nom</label>
					<Field<string>
					name="nomEspece"
					component={TextInput}
					placeholder="Nom de l'esp??ce"
					/>
				</div>
				<div>
					<label>Domaine</label>
					<Field<string> name="domaineEspece" component={SelectInput}
						parse={(value) => { if (value !== '') getReignsUnderDomain(value); return value}}>
						<option />
						{
							domains.map((domain: IThing) => (
								<option key={domain.id} value={domain.id}>{domain.name}</option>
							))
						}
					</Field>
				</div>
				{(reigns.length === 0)
				? <p>Veuillez s??lectionner un domaine de r??f??rence</p>
				: <div>
					<label>R??gne</label>
					<Field<string> name="regneEspece" component={SelectInput}
						parse={(value) => { if (value !== '') getBranchesUnderReign(value); return value}}>
						<option />
						{
							reigns.map((reign: IThing) => (
								<option key={reign.id} value={reign.id}>{reign.name}</option>
							))
						}
					</Field>
				</div>}
				{(branches.length === 0)
				? <p>Veuillez s??lectionner un r??gne de r??f??rence</p>
				: <div>
					<label>Embranchement</label>
					<Field<string> name="embranchementEspece" component={SelectInput}
						parse={(value) => { if (value !== '') getClassesUnderBranch(value); return value}}>
						<option />
						{
							branches.map((branch: IThing) => (
								<option key={branch.id} value={branch.id}>{branch.name}</option>
							))
						}
					</Field>
				</div>}
				{(classes.length === 0)
				? <p>Veuillez s??lectionner une branche de r??f??rence</p>
				: <div>
					<label>Classe</label>
					<Field<string> name="classeEspece" component={SelectInput}
						parse={(value) => { if (value !== '') getOrdersUnderClass(value); return value}}>
						<option />
						{
							classes.map((branch_class: IThing) => (
								<option key={branch_class.id} value={branch_class.id}>{branch_class.name}</option>
							))
						}
					</Field>
				</div>}
				{(orders.length === 0)
				? <p>Veuillez s??lectionner une classe de r??f??rence</p>
				: <div>
					<label>Ordre</label>
					<Field<string> name="ordreEspece" component={SelectInput}
						parse={(value) => { if (value !== '') getFamiliesUnderOrder(value); return value}}>
						<option />
						{
							orders.map((order: IThing) => (
								<option key={order.id} value={order.id}>{order.name}</option>
							))
						}
					</Field>
				</div>}
				{(families.length === 0)
				? <p>Veuillez s??lectionner un ordre de r??f??rence</p>
				: <div>
					<label>Famille</label>
					<Field<string> name="familleEspece" component={SelectInput}
						parse={(value) => { if (value !== '') getGenusesUnderFamily(value); return value}}>
						<option />
						{
							families.map((family: IThing) => (
								<option key={family.id} value={family.id}>{family.name}</option>
							))
						}
					</Field>
				</div>}
				{(genuses.length === 0)
				? <p>Veuillez s??lectionner une famille de r??f??rence</p>
				: <div>
					<label>G??ne</label>
					<Field<string> name="geneEspece" component={SelectInput}
						parse={(value) => { if (value !== '') getGenusesUnderFamily(value); return value}}>
						<option />
						{
							genuses.map((genus: IThing) => (
								<option key={genus.id} value={genus.id}>{genus.name}</option>
							))
						}
					</Field>
				</div>}
				{(values.geneEspece === undefined)
				? <p>Veuillez s??lectionner un g??ne de r??f??rence</p>
				: <div>
					<label>Esp??ce</label>
					<Field
						name="espece"
						component={TextAreaInput}
						placeholder="Plus d'infos sur l'esp??ce"
					/>
				</div>}
				<div className="buttons">
					<button type="submit" disabled={submitting || pristine}>
						Submit
					</button>
					<button
						type="button"
						onClick={event => form.reset}
						disabled={submitting || pristine}
					>
					Reset
					</button>
				</div>
			</form>
		)}
		/>
	</Styles>
	)
}