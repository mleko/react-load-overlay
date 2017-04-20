import * as React from "react";
import {merge} from "typescript-object-utils";
import {LoadingOverlay, LoadingOverlayProps} from "../LoadingOverlay";

const defaults: LoadOptions = {
	loadingPropName: "loading",
	overlayClass: LoadingOverlay,
	isLoading: true
};

export function loading(options: LoadOptions): <C extends Function>(WrappedComponent: C) => C {

	options = merge(defaults, options);
	const loadingResolver = options.isLoading === true ? (p) => !!p :
		(options.isLoading === false ? ((p) => !p) : options.isLoading);

	return <T extends React.ComponentClass<P>, P>(WrappedComponent: T): React.ComponentClass<P> => {

		class Animate extends React.Component<P, void> {

			public static displayName = "LoadingOverlay(" + (WrappedComponent["displayName"] || WrappedComponent["name"] || "Component") + ")";

			public render(): JSX.Element {
				const overlayProps = merge(
					options.overlayProps,
					{
						loading: loadingResolver(this.props[options.loadingPropName]),
						containerStyle: this.props["style"]
					}
				);
				const elementProps = merge(
					this.props, {style: {}}
				);

				return React.createElement(options.overlayClass, overlayProps,
					React.createElement(WrappedComponent, elementProps)
				);
			}

		}

		return Animate as React.ComponentClass<P>;
	};
}

export interface LoadOptions {
	loadingPropName?: string;
	overlayClass?: React.ComponentClass<LoadingOverlayProps>;
	overlayProps?: LoadingOverlayProps;
	isLoading?: ((prop: any) => boolean) | boolean ;
}
