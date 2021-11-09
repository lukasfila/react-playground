import React, {useState} from "react";

import {LitButtonReact, LitFormReact, LitInputReact, LitResizeReact } from "@local/web-components-lit/src/react";

export function Playground() {
	let [formState, setFormState] = useState("");

	const onFormSubmitChange = (value: string) => {
		setFormState(value)
	}

	let [inputState, setInputState] = useState("");

	return (
		<>
		<div>
			<h1>Lit molecules</h1>
			<h2>LitForm</h2>
			<p>
				<LitFormReact searchText={formState} onFormSubmit={(event) => onFormSubmitChange(event.target.searchText)}/>
			</p>
			<pre>
				submit: {formState}
			</pre>
		</div>
		<div>
			<h1>Lit atoms</h1>
			<h2>LitInput</h2>
			<p>
				<LitInputReact onValueChanged={(event) => setInputState(event.target!.value)} id={"searchBox"} value={inputState}>Label for input</LitInputReact>
			</p>
			<pre>
				key press: {inputState}
			</pre>
			<h2>LitButton</h2>
			<p>
				<LitButtonReact type="submit" onButtonClick={() => alert(1)}>Button text</LitButtonReact>
			</p>
			<h2>LitResize</h2>
			<p>
				<LitResizeReact data={{width: 100, height: 100, scale: 1}}>
					<b>Test</b>
					<img width="100%" height="100%" src="../img.png"/>
				</LitResizeReact>
			</p>
		</div>
		</>
	);
}