import fs from "node:fs/promises"
import path from "node:path"

import { processArguments } from "./parse-arguments"
import { templates } from "./templates"

try {
	const { selectedTemplates } = processArguments(process.argv.slice(2))

	const source = path.join(import.meta.dirname, "../templates")
	const destination = process.cwd()

	for (const name of selectedTemplates) {
		const template = templates[name]
		await fs.cp(path.join(source, name), path.join(destination, template.target), {
			recursive: true,
		})
		console.log(`Set up ${template.prettyName} settings.`)
	}
} catch (error) {
	console.error(error instanceof Error ? error.message : error)
}
