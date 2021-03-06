import * as React from "react";
import {SpinnerExamples} from "../SpinnerExamples";
import {WrappedExamples} from "../WrappedExamples";

export class Examples extends React.Component<{}, {}> {
	public render(): JSX.Element {
		return(
			<div>
				<SpinnerExamples/>
				<WrappedExamples/>
			</div>
		);
	}
}
