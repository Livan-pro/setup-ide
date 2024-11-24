/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	printWidth: 100,
	useTabs: true,
	semi: false,
	trailingComma: "all",
	plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-packagejson"],
	importOrder: ["<BUILTIN_MODULES>", "", "<THIRD_PARTY_MODULES>", "", "^../(.*)$", "", "^[./]"],
}

export default config
