# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > scope > undecl-export`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 20
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExportLocalDeclaration {
			declaration: undefined
			exportKind: "value"
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 19
					index: 19
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			specifiers: Array [
				JSExportLocalSpecifier {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 16
							index: 16
							line: 1
						}
						start: Object {
							column: 9
							index: 9
							line: 1
						}
					}
					exported: JSIdentifier {
						name: "encrypt"
						loc: Object {
							filename: "input.js"
							identifierName: "encrypt"
							end: Object {
								column: 16
								index: 16
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
					}
					local: JSReferenceIdentifier {
						name: "encrypt"
						loc: Object {
							filename: "input.js"
							identifierName: "encrypt"
							end: Object {
								column: 16
								index: 16
								line: 1
							}
							start: Object {
								column: 9
								index: 9
								line: 1
							}
						}
					}
				}
			]
		}
	]
}
```