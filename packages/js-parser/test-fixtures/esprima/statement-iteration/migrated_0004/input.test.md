# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-iteration > migrated_0004`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "esprima/statement-iteration/migrated_0004/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "esprima/statement-iteration/migrated_0004/input.js"
		end: Object {
			column: 0
			index: 23
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSDoWhileStatement {
			loc: Object {
				filename: "esprima/statement-iteration/migrated_0004/input.js"
				end: Object {
					column: 22
					index: 22
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			test: JSBooleanLiteral {
				value: true
				loc: Object {
					filename: "esprima/statement-iteration/migrated_0004/input.js"
					end: Object {
						column: 21
						index: 21
						line: 1
					}
					start: Object {
						column: 17
						index: 17
						line: 1
					}
				}
			}
			body: JSExpressionStatement {
				loc: Object {
					filename: "esprima/statement-iteration/migrated_0004/input.js"
					end: Object {
						column: 10
						index: 10
						line: 1
					}
					start: Object {
						column: 3
						index: 3
						line: 1
					}
				}
				expression: JSCallExpression {
					arguments: Array []
					loc: Object {
						filename: "esprima/statement-iteration/migrated_0004/input.js"
						end: Object {
							column: 9
							index: 9
							line: 1
						}
						start: Object {
							column: 3
							index: 3
							line: 1
						}
					}
					callee: JSReferenceIdentifier {
						name: "that"
						loc: Object {
							filename: "esprima/statement-iteration/migrated_0004/input.js"
							identifierName: "that"
							end: Object {
								column: 7
								index: 7
								line: 1
							}
							start: Object {
								column: 3
								index: 3
								line: 1
							}
						}
					}
				}
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```