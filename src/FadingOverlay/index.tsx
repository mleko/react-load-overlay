import * as React from "react";
import {animate, AnimationConfig} from "react-animate-hoc";
import {merge} from "typescript-object-utils";
import {LoadingOverlay, LoadingOverlayProps} from "../LoadingOverlay";

export function fadingOverlay(animationOptions?: AnimationConfig) {
	const overlay = animatedOverlay(animationOptions || {duration: 200});
	return (props: LoadingOverlayProps) => {
		props = merge(props, {opacity: props.loading ? 1 : 0});
		return React.createElement(overlay, props);
	};
}

export const FadingOverlay = fadingOverlay();

function animatedOverlay(animationOptions?: AnimationConfig) {
	return animate({properties: {opacity: animationOptions || true}})
	((props: AnimatedOverlayProps) => {
		props = merge(props, {
			loading: props.opacity ? 1 : 0,
			overlayStyle: merge(props.overlayStyle, {opacity: props.opacity})
		});
		return React.createElement(LoadingOverlay, props);
	});
}

type AnimatedOverlayProps = LoadingOverlayProps & {
	opacity: number;
};
