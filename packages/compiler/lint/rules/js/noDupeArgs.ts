/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Path} from "@romefrontend/compiler";
import {AnyNode} from "@romefrontend/ast";
import {getBindingIdentifiers} from "@romefrontend/js-ast-utils";
import {descriptions} from "@romefrontend/diagnostics";

export default {
	name: "js/noDupeArgs",
	enter(path: Path): AnyNode {
		const {node, context} = path;

		if (node.type === "JSFunctionHead") {
			const uniqueIdentifiers = new Set();

			for (const param of node.params) {
				for (const {name} of getBindingIdentifiers(param)) {
					if (uniqueIdentifiers.has(name)) {
						context.addNodeDiagnostic(
							param,
							descriptions.LINT.JS_NO_DUPE_ARGS(name),
						);
					}

					uniqueIdentifiers.add(name);
				}
			}
		}

		return node;
	},
};
