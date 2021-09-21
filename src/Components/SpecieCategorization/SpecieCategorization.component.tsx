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
			const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/reign/reignsUnderDomain/${domainId}`)
			setReigns(response.data)
		}
		catch (error: any) {
			alert(error.response.data.message)
		}
	},getBranchesUnderReign = async (reignId: string) => {
		try {
			const response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/branch/branchesUnderReign/${reignId}`)
			setDomains(response.data)
		}
		catch (error: any) {
			alert(error.response.data.message)
		}
	}
	
	const [domains, setDomains] = useState<Array<IThing>>([]),
		[reigns, setReigns] = useState<Array<IThing>>([]),
		[branches, setBranch] = useState<Array<IThing>>([]),
		[classes, setClasses] = useState<Array<IThing>>([]),
		[orders, setOrders] = useState<Array<IThing>>([]),
		[families, setFamilies] = useState<Array<IThing>>([]),
		[genuses, setGenuses] = useState<Array<IThing>>([])

	useEffect(() => {
		getAllDomains()
	}, [])

	return (
		<Styles>
		<h1>Catégorisation de l'espèce</h1>
		<p>
			Vous pouvez catégoriser ici l'espèce que vous voulez. Les listes
			déroulantes se réduiront en fonction de ce que vous avez sélectionné
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
					placeholder="Nom de l'espèce"
					/>
				</div>
				<div>
					<label>Domaine</label>
					<Field<string> name="domaineEspece"
						render={({input, meta, rest}) => (
							<select {...input} {...rest} onChange={event => getReignsUnderDomain(event.target.value)}>
								<option />
								{
									domains.map((domain: IThing) => (
										<option key={domain.id} value={domain.id}>{domain.name}</option>
									))
								}
							</select>
						)}
					/>
				</div>
				{(reigns.length === 0)
				? <p>Veuillez sélectionner un domaine de référence</p>
				: <div>
					<label>Règne</label>
					<Field<string> name="regneEspece" component={SelectInput}>
						<option />
						{
							reigns.map((reign: IThing) => (
								<option key={reign.id} value={reign.id}>{reign.name}</option>
							))
						}
					</Field>
				</div>}
				{(values.regneEspece === undefined)
				? <p>Veuillez sélectionner un règne de référence</p>
				: <div>
					<label>Embranchement</label>
					<Field<string> name="embranchementEspece" component={SelectInput}>
						<option />
						<option>Embranchement 1</option>
						<option>Embranchement 2</option>
						<option>Embranchement 3</option>
					</Field>
				</div>}
				{(values.embranchementEspece === undefined)
				? <p>Veuillez sélectionner une branche de référence</p>
				: <div>
					<label>Classe</label>
					<Field<string> name="classeEspece" component={SelectInput}>
						<option />
						<option>Classe 1</option>
						<option>Classe 2</option>
						<option>Classe 3</option>
					</Field>
				</div>}
				{(values.classeEspece === undefined)
				? <p>Veuillez sélectionner une classe de référence</p>
				: <div>
					<label>Ordre</label>
					<Field<string> name="ordreEspece" component={SelectInput}>
						<option />
						<option>Ordre 1</option>
						<option>Ordre 2</option>
						<option>Ordre 3</option>
					</Field>
				</div>}
				{(values.ordreEspece === undefined)
				? <p>Veuillez sélectionner un ordre de référence</p>
				: <div>
					<label>Famille</label>
					<Field<string> name="familleEspece" component={SelectInput}>
						<option />
						<option>Famille 1</option>
						<option>Famille 2</option>
						<option>Famille 3</option>
					</Field>
				</div>}
				{(values.familleEspece === undefined)
				? <p>Veuillez sélectionner une famille de référence</p>
				: <div>
					<label>Gène</label>
					<Field<string> name="geneEspece" component={SelectInput}>
						<option />
						<option>Gène 1</option>
						<option>Gène 2</option>
						<option>Gène 3</option>
					</Field>
				</div>}
				{(values.geneEspece === undefined)
				? <p>Veuillez sélectionner un gène de référence</p>
				: <div>
					<label>Espèce</label>
					<Field
						name="espece"
						component={TextAreaInput}
						placeholder="Plus d'infos sur l'espèce"
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