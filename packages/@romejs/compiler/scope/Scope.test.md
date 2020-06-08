# `Scope.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/compiler/scope/Scope.test.ts --update-snapshots` to update.

## `var`

### `0`

```
# Scope root
## Child Scopes
	# Scope program
	## Variables
	 * variable foo
```

### `1`

```
# Scope root
## Child Scopes
	# Scope program
	## Variables
	 * function foo
	## Child Scopes
		# Scope function
		## Variables
		 * arguments arguments
		## Child Scopes
			# Scope block
			## Variables
			 * variable bar
			 * variable car
			## Child Scopes
				# Scope block
```