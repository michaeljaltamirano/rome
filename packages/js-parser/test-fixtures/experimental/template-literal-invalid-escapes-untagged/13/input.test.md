# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/js-parser/index.test.ts --update-snapshots` to update.

## `experimental > template-literal-invalid-escapes-untagged > 13`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "experimental/template-literal-invalid-escapes-untagged/13/input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "experimental/template-literal-invalid-escapes-untagged/13/input.js"
		end: Object {
			column: 6
			index: 6
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "parse/js"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: MARKUP {parts: Array [RAW_MARKUP {value: "Invalid escape sequence in template"}]}
			}
			location: Object {
				filename: "experimental/template-literal-invalid-escapes-untagged/13/input.js"
				mtime: undefined
				sourceText: undefined
				end: Object {
					column: 3
					index: 3
					line: 1
				}
				start: Object {
					column: 3
					index: 3
					line: 1
				}
			}
		}
	]
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "experimental/template-literal-invalid-escapes-untagged/13/input.js"
				end: Object {
					column: 6
					index: 6
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSTemplateLiteral {
				expressions: Array []
				loc: Object {
					filename: "experimental/template-literal-invalid-escapes-untagged/13/input.js"
					end: Object {
						column: 6
						index: 6
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				quasis: Array [
					JSTemplateElement {
						cooked: "\\xAg"
						raw: "\\xAg"
						tail: true
						loc: Object {
							filename: "experimental/template-literal-invalid-escapes-untagged/13/input.js"
							end: Object {
								column: 5
								index: 5
								line: 1
							}
							start: Object {
								column: 1
								index: 1
								line: 1
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```

 experimental/template-literal-invalid-escapes-untagged/13/input.js:1:3 parse/js ━━━━━━━━━━━━━━━━━━━

  ✖ Invalid escape sequence in template

    `\xAg`
       ^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```
