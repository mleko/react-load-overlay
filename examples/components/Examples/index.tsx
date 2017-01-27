import * as React from "react";
import {LoadingOverlay} from "../../../src/LoadingOverlay";

export class Examples extends React.Component<void, State> {

	constructor(props: void, context: any) {
		super(props, context);
		this.state = {
			loading: true
		};
	}

	public render(): JSX.Element {
		return (
			<div>
				<button onClick={this.toggleOverlay}>Toggle overlay</button>
				<LoadingOverlay loading={this.state.loading}>
					<div style={{maxWidth: 1000, display: "inline-block"}}>
						Lorem ipsum dolor sit amet mauris. Aenean bibendum id, orci. Proin nunc felis, volutpat elit, varius vitae, ornare arcu massa, nonummy rutrum. In urna. Proin porttitor a, tortor. Nulla quis nulla sed leo nec cursus dignissim tempor, sapien pede interdum wisi at tellus wisi, aliquam sapien. Morbi eget elit tincidunt tellus hendrerit lacus. Pellentesque porta nisl. Curabitur interdum rhoncus, dolor placerat tempor varius, leo. In laoreet ligula tristique commodo. Cras dictum quis, lacinia turpis luctus et mauris ac turpis egestas. Suspendisse dignissim turpis. Proin id lorem. Pellentesque mattis magna. Quisque ornare egestas aliquam, nulla a elit. In molestie turpis at sagittis mi. Fusce fringilla condimentum, urna a diam. Nulla faucibus vestibulum. Aenean ac erat. Aenean bibendum. Nulla ac nisl. Nulla convallis turpis. Vivamus justo. Praesent rhoncus nunc, ac lacus. Maecenas malesuada quis, libero. Nullam consequat ac, laoreet viverra. Ut sodales nulla. Suspendisse facilisis sagittis sed, ultrices posuere iaculis suscipit. Suspendisse elit. Mauris at ultrices posuere eget, bibendum leo, pretium vehicula est. Aliquam rhoncus nunc. Phasellus fermentum tortor. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Sed eu lorem. Vivamus magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam sapien quis erat id dui. Etiam nunc vitae purus. Class aptent taciti sociosqu ad litora torquent per inceptos hymenaeos. Sed laoreet enim. Pellentesque euismod ut, placerat consequat. Donec at ipsum. Nam mattis, magna ultrices nec, iaculis at, vehicula tortor non odio. Morbi quis tortor. Suspendisse sollicitudin. Fusce enim. Phasellus aliquet ipsum. Curabitur gravida ullamcorper lorem scelerisque condimentum faucibus quis, venenatis augue a augue a ipsum. Nam sed justo. Maecenas at sapien. Maecenas lacus. Nullam suscipit a, blandit suscipit, risus commodo turpis at nulla in velit tristique senectus et mi. Etiam sit amet, tellus. Proin luctus. Maecenas ac turpis et netus et magnis dis parturient montes, nascetur ridiculus mus. Nunc sed turpis. Integer adipiscing arcu erat, molestie mauris. Donec in nisl. Nam tempor risus. Suspendisse gravida. Duis dictum. Fusce nisl felis non eros tincidunt viverra. Pellentesque fringilla elementum diam mi at justo. Nulla in massa. Maecenas fermentum ut, libero. Nullam pharetra hendrerit id, congue sit amet, nonummy nisl nulla nulla, vitae metus. Nullam sit amet ipsum at sapien accumsan imperdiet, neque at urna accumsan sit amet, pretium venenatis. Donec tortor nibh, volutpat lacinia arcu congue augue quis mauris eget diam id sollicitudin arcu. Mauris nec augue. Lorem ipsum dolor sit amet, vulputate vehicula. Vivamus laoreet ligula in faucibus quis, velit. Nunc mollis, metus. Curabitur at erat. Pellentesque laoreet fermentum. Proin justo. Vestibulum ut eros sed lacus. Nunc sed lorem sit amet quam enim, id nulla ante, luctus a, dolor. Ut vel tincidunt mauris. Mauris convallis aliquam ut, ultricies lacinia quam molestie mauris. Nullam vitae urna. Nunc viverra, est eu orci luctus elit, ut venenatis consequat. Curabitur feugiat leo. Aliquam erat in faucibus lectus rhoncus tortor. Nulla ante. Lorem ipsum ac ligula. Lorem ipsum dolor nunc, at metus. Aliquam tempor et, imperdiet ante eu odio. Mauris et quam. Fusce ullamcorper augue, feugiat venenatis, elit eu odio. Nam diam. Nam eget luctus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque fringilla at, egestas vulputate, enim sed ante pulvinar diam mauris, placerat nisl sapien varius lorem. Sed at porttitor risus. Nullam vulputate a, ultricies vitae, bibendum varius risus nunc, placerat vestibulum. Aenean justo. Quisque ornare lorem. Aliquam quis wisi. Phasellus adipiscing. Nulla tincidunt viverra. Cras eu libero. Sed fringilla mauris. Mauris imperdiet, urna eu arcu nec risus. Donec pulvinar felis, consequat faucibus, tortor metus tellus, quis dolor. In.
					</div>
				</LoadingOverlay>
			</div>
		);
	}

	private toggleOverlay = () => {
		this.setState({loading: !this.state.loading});
	}
}

interface State {
	loading: boolean;
}
