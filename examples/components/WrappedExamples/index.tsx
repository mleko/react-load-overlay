import * as React from "react";
import {loading} from "../../../src/loading";
import {LoremIpsum} from "../Examples/LoremIpsum";
import {spinner} from "../Examples/spinners";

const LoadingLoremIpsum = loading({overlayProps: {spinner, inline: true}})(LoremIpsum);
const ReadyLoremIpsum = loading({overlayProps: {spinner, inline: true}, isLoading: false, loadingPropName: "ready"})
(LoremIpsum);

export class WrappedExamples extends React.Component<{}, {}> {

	public render(): JSX.Element {
		return (
			<div>
				<LoadingLoremIpsum style={{width: 250, margin: 5}} loading={true} length={520}/>
				<ReadyLoremIpsum style={{width: 250, margin: 5}} ready={false} length={520}/>
			</div>
		);
	}

}
