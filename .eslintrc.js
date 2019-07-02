module.exports = {
  root: true,
  env: {
    browser: true,
		es6: true,
		node: true
  },
	extends: ["plugin:vue/essential", "@vue/prettier","eslint:recommended"],
	parserOptions: {
		ecmaVersion: 2015,
		sourceType: "module",
		parser: "babel-eslint"
	},
	plugins: ['vue', 'prettier'],
  rules: {
		"prettier/prettier": "error",
		"semi": "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint"
	},
	overrides: []
};
