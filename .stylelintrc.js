module.exports = {
	extends: [
		'stylelint-config-standard',
		"stylelint-config-css-modules",
		"stylelint-prettier/recommended"
	],
	plugins: [
		'stylelint-order',
		'stylelint-prettier',
		"stylelint-selector-bem-pattern"
	],
	rules: {
		"prettier/prettier": true,
		'at-rule-no-unknown': null,
		"no-descending-specificity": null,
		"no-duplicate-selectors": null
	}
}
