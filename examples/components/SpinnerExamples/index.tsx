import * as React from "react";
import {FadingOverlay as LoadingOverlay} from "../../../";
import {LoremIpsum} from "../Examples/LoremIpsum";
import {spinners} from "../Examples/spinners";

export class SpinnerExamples extends React.Component<void, State> {

	constructor(props: void, context: any) {
		super(props, context);
		this.state = {
			loading: true,
			spinnerId: 0
		};
	}

	public render(): JSX.Element {
		return (
			<div>
				<button onClick={this.toggleOverlay}>Toggle overlay</button>
				<button onClick={this.toggleSpinner}>Switch spinner</button>
				<div>
					<LoadingOverlay
						loading={this.state.loading}
						spinner={spinners[this.state.spinnerId]}
					>
						<LoremIpsum style={{maxWidth: 1000}}/>
					</LoadingOverlay>

					<div style={{height: 30}}/>

					<LoadingOverlay
						loading={this.state.loading}
						spinner={spinners[this.state.spinnerId]}
					>
						<LoremIpsum style={{width: 2000}}/>
					</LoadingOverlay>
				</div>
			</div>
		);
	}

	private toggleOverlay = () => {
		this.setState({loading: !this.state.loading});
	};

	private toggleSpinner = () => {
		this.setState({spinnerId: (this.state.spinnerId + 1) % spinners.length});
	};
}

interface State {
	loading: boolean;
	spinnerId: number;
}
