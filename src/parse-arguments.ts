import { TemplateName, templates } from "./templates"

const printUsage = () => {
	console.log(
		"Usage: setup-ide template1[,template2]\n" +
			"Available templates: " +
			Object.keys(templates).join(", ") +
			"\n" +
			"Examples:\n" +
			"  setup-ide idea\n" +
			"  setup-ide vscode,idea\n" +
			"  setup-ide vscode\n",
	)
}

export const processArguments = (cliArguments: string[]) => {
	if (cliArguments.length === 0) {
		printUsage()
		throw new Error("No arguments provided")
	}

	if (cliArguments.length > 1) {
		printUsage()
		throw new Error("Only one argument is allowed")
	}

	const wantedTemplates = cliArguments[0].split(",")

	const unknownTemplates = wantedTemplates.filter((template) => !(template in templates))
	if (unknownTemplates.length > 0) {
		printUsage()
		throw new Error(`Unknown templates: ${unknownTemplates.join(", ")}`)
	}

	return { selectedTemplates: wantedTemplates as TemplateName[] }
}
