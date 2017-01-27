import * as React from "react";

interface Props {
	loading?: boolean;
}

export class LoadingOverlay extends React.Component<Props, void> {

	public render(): JSX.Element {
		const overlayStyle = {
			position: "absolute",
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			backgroundColor: "rgba(150,150,150,0.8)",
			zIndex: 9999,
			display: this.props.loading ? "block" : "none",
		};
		const containerStyle = {
			position: "relative"
		};
		return (
			<div style={containerStyle}>
				{this.props.children}
				<div
					style={overlayStyle}
				>
					<div style={{textAlign: "center"}}>
						Loading
					</div>
				</div>
			</div>
		);
	}
}
