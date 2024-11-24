export const templates = {
	idea: { target: ".idea", prettyName: "IntelliJ IDEA" },
	vscode: { target: ".vscode", prettyName: "Visual Studio Code" },
}

export type TemplateName = keyof typeof templates
