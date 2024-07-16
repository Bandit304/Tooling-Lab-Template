import globals from "globals";
import pluginJs from "@eslint/js";


export default [
	{languageOptions: { globals: globals.browser }},
	pluginJs.configs.recommended,
	{
		files: [ "resources/scripts/**/*.js" ],
		rules: {
			"array-bracket-spacing": [2, "always"],
			"no-const-assign": 2,
			"no-var": "error",
			"indent": [2, 2],
			"quotes": [2, "backtick"],
			"eqeqeq": "error",
		},
	},
];