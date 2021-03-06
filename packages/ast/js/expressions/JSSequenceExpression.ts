/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AnyJSExpression, NodeBaseWithComments} from "@romefrontend/ast";
import {createBuilder} from "../../utils";

export interface JSSequenceExpression extends NodeBaseWithComments {
	type: "JSSequenceExpression";
	expressions: Array<AnyJSExpression>;
}

export const jsSequenceExpression = createBuilder<JSSequenceExpression>(
	"JSSequenceExpression",
	{bindingKeys: {}, visitorKeys: {expressions: true}},
);
