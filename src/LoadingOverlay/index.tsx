import * as React from "react";
import {merge} from "typescript-object-utils";

export interface LoadingOverlayProps {
	loading?: boolean;
	spinner?: React.ReactNode;
	overlayStyle?: React.CSSProperties;
}

export class LoadingOverlay extends React.Component<LoadingOverlayProps, void> {

	private spinnerContainer: HTMLDivElement;
	private overlay: HTMLDivElement;
	private container: HTMLDivElement;

	public render(): JSX.Element {
		const baseOverlayStyle = {
			position: "absolute",
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			backgroundColor: "rgba(150,150,150,0.8)",
			zIndex: 999,
			display: this.props.loading ? "block" : "none",
			transition: "padding 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
			textAlign: "left"
		};
		const containerStyle = {
			position: "relative",
			display: "inline-block"
		};

		const overlayStyle = merge(baseOverlayStyle, this.props.overlayStyle || {});

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
		const boundingClientRect = this.container.getBoundingClientRect();

		const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		const spinnerHeight = this.spinnerContainer.offsetHeight;

		const offsetTop = calculateOffset(
			viewportHeight, boundingClientRect.top,
			boundingClientRect.height, spinnerHeight
		);
		if (null !== offsetTop) {
			this.overlay.style.paddingTop = String(offsetTop) + "px";
		}

		const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		const spinnerWidth = this.spinnerContainer.offsetWidth;

		const offsetLeft = calculateOffset(
			viewportWidth, boundingClientRect.left,
			boundingClientRect.width, spinnerWidth
		);
		if (null !== offsetLeft) {
			this.overlay.style.paddingLeft = String(offsetLeft) + "px";
		}

	};
}

function calculateOffset(
	viewportSize: number, containerStart: number,
	containerSize: number, spinnerSize: number
): number {
	const visiblePart = getVisiblePart(viewportSize, containerStart, containerSize);
	if (null !== visiblePart) {
		const visiblePartSize = visiblePart.to - visiblePart.from;
		return Math.min(
			containerSize - spinnerSize,
			visiblePart.from + (visiblePartSize - spinnerSize) / 2
		);
	}
	return null;
}

function getVisiblePart(viewportSize: number, from: number, size: number) {
	if (from >= viewportSize || from + size <= 0) {
		return null;
	}
	return {
		from: from < 0 ? -from : 0,
		to: from + size > viewportSize ? viewportSize - from : size
	};
}
