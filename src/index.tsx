import React from "react";
import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import TextInput from "./Components/form/TextInput";
import TextAreaInput from "./Components/form/TextAreaInput";
import SelectInput from "./Components/form/SelectInput";

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



const App: React.FC = () => (
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
					<Field<string> name="domaineEspece" component={SelectInput}>
					<option />
					<option>Domaine 1</option>
					<option>Domaine 2</option>
					<option>Domaine 3</option>
					</Field>
				</div>
				<div>
					<label>Règne</label>
					<Field<string> name="regneEspece" component={SelectInput}>
					<option />
					<option>Règne 1</option>
					<option>Règne 2</option>
					<option>Règne 3</option>
					</Field>
				</div>
				<div>
					<label>Embranchement</label>
					<Field<string> name="embranchementEspece" component={SelectInput}>
					<option />
					<option>Embranchement 1</option>
					<option>Embranchement 2</option>
					<option>Embranchement 3</option>
					</Field>
				</div>
				<div>
					<label>Classe</label>
					<Field<string> name="classeEspece" component={SelectInput}>
					<option />
					<option>Classe 1</option>
					<option>Classe 2</option>
					<option>Classe 3</option>
					</Field>
				</div>
				<div>
					<label>Ordre</label>
					<Field<string> name="ordreEspece" component={SelectInput}>
					<option />
					<option>Ordre 1</option>
					<option>Ordre 2</option>
					<option>Ordre 3</option>
					</Field>
				</div>
				<div>
					<label>Famille</label>
					<Field<string> name="familleEspece" component={SelectInput}>
					<option />
					<option>Famille 1</option>
					<option>Famille 2</option>
					<option>Famille 3</option>
					</Field>
				</div>
				<div>
					<label>Gène</label>
					<Field<string> name="geneEspece" component={SelectInput}>
						<option />
						<option>Gène 1</option>
						<option>Gène 2</option>
						<option>Gène 3</option>
					</Field>
				</div>
				<div>
					<label>Espèce</label>
					<Field
						name="espece"
						component={TextAreaInput}
						placeholder="Plus d'infos sur l'espèce"
					/>
				</div>
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
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
