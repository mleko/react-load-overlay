import * as React from "react";

interface Props {
	loading?: boolean;
	spinner?: React.ReactNode;
}

export class LoadingOverlay extends React.Component<Props, void> {

	private spinnerContainer: HTMLDivElement;
	private overlay: HTMLDivElement;
	private container: HTMLDivElement;

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
			transition: "padding 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
		};
		const containerStyle = {
			position: "relative"
		};
		return (
			<div style={containerStyle} ref={this.mountContainer}>
				{this.props.children}
				<div
					ref={this.mountOverlay}
					style={overlayStyle}
				>
					<div ref={this.mountSpinner} style={{textAlign: "center", display: "inline-block"}}>
						{this.props.spinner}
					</div>
				</div>
			</div>
		);
	}

	public componentDidMount() {
		document.addEventListener("scroll", this.positionSpinner);
		this.positionSpinner();
	}

	public componentDidUpdate() {
		this.positionSpinner();
	}

	private mountSpinner = (ref: HTMLDivElement) => {
		this.spinnerContainer = ref;
	};
	private mountContainer = (ref: HTMLDivElement) => {
		this.container = ref;
	};
	private mountOverlay = (ref: HTMLDivElement) => {
		this.overlay = ref;
	};

	private positionSpinner = () => {
		const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		const spinnerHeight = this.spinnerContainer.offsetHeight;
		const boundingClientRect = this.container.getBoundingClientRect();

		const visiblePartY = this.getVisiblePart(viewportHeight, boundingClientRect.top, boundingClientRect.height);
		if (null !== visiblePartY) {
			const visiblePartYSize = visiblePartY.to - visiblePartY.from;
			const offsetTop = Math.min(boundingClientRect.height - spinnerHeight, visiblePartY.from + (visiblePartYSize - spinnerHeight) / 2);
			this.overlay.style.paddingTop = String(offsetTop) + "px";
		}

	};

	private getVisiblePart(viewportSize, from, size) {
		if (from >= viewportSize || from + size <= 0) {
			return null;
		}
		return {
			from: from < 0 ? -from : 0,
			to: from + size > viewportSize ? viewportSize - from : size
		};
	}
}
